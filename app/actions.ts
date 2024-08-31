'use server';

import { prisma } from '@/prisma/prisma-client';
import { CheckoutFormValues } from '@/shared/constants';
import { OrderStatus, Prisma } from '@prisma/client';
import { cookies } from 'next/headers';
import { sendEmail } from '@/shared/lib';
import { PayOrderTemplate } from '@/shared/components/shared';
import { getUserSession } from '@/shared/lib/get_user_session';
import { hashSync } from 'bcrypt';
import { VerificationUserTemplate } from '@/shared/components/shared/email-temapltes/verification-user';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;
    
    if (!cartToken) {
      throw new Error("Cart tokeen not found");
    }

    // Находим корзину по токену
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error('Cart not found');
    }

    // Если корзина пустая возращаем ошибку
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    // Создаем заказ
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount / 100,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    // Очищаем корзину
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    // await prisma.cartItem.deleteMany({
    //   where: {
    //     cartId: userCart.id,
    //   },
    // });

    // TODO: create pay link
    
    await sendEmail(
      data.email,
      'Paradise Pizza | Pay for order #' + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: 'https://linktr.ee/maxim_paradise',
      }),
    );

    return 'https://linktr.ee/maxim_paradise';
  } catch (err) {
    console.log('[CreateOrder] Server error', err);
  }
};

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('User not found');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (error) {
    console.log('Error [UPDATE_USER]', error);
    throw error;
  }
};

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Email not confirmed');
      }

      throw new Error('The user already exists');
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      'Paradise Pizza / 📝 Confirmation of registration',
      VerificationUserTemplate({
        code,
      }),
    );
  } catch (err) {
    console.log('Error [CREATE_USER]', err);
    throw err;
  }
}