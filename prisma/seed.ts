import { categories, _ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { Pizzas } from "../shared/components/shared/products";
import { Prisma } from "@prisma/client";
import { PizzaFest, Eyes, SelectionForYou, Fact, Coffe, Meat } from "../shared/constants";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
    productId,
    pizzaType,
    size,
    customPrice
}: {
    productId: number;
    pizzaType?: 1 | 2;
    size?: 20 | 30 | 40;
    customPrice?: number;
}) => {
    return {
        productId,
        price: size ? customPrice ?? randomNumber(2, 7) : randomNumber(2, 7),
        pizzaType,
        size,
    } as Prisma.ProductItemUncheckedCreateInput;
};

async function up(){

    await prisma.user.createMany({
        data: [
          {
            fullName: 'User Test',
            email: 'user@test.com',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'USER',
          },
          {
            fullName: 'Admin Admin',
            email: 'admin@test.com',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'ADMIN',
          },
        ],
      });

    await prisma.category.createMany({
        data: categories,
      });
    
    await prisma.ingredient.createMany({
        data: _ingredients,
    });

    await prisma.product.createMany({
        data: products,
    });
    
    const pizza1 = await prisma.product.create({
        data: {
            name: 'Pepperoni fresh',
            imageUrl: Pizzas.PepperoniFresh,
            categoryId: 1,
            ingredients: {
            connect: _ingredients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Cheese',
            imageUrl: Pizzas.Cheese,
            categoryId: 1,
            ingredients: {
            connect: _ingredients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Chorizo fresh',
            imageUrl: Pizzas.ChorizoFresh,
            categoryId: 1,
            ingredients: {
            connect: _ingredients.slice(10, 40),
            },
        },
    });

    await prisma.productItem.createMany({
        data: [

            
            // Пицца "Пепперони фреш"
            generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20, customPrice: 3 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30, customPrice: 4 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40, customPrice: 5 }),

            // Пицца "Сырная"
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20, customPrice: 3 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30, customPrice: 4 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40, customPrice: 5 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20, customPrice: 2 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30, customPrice: 3 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40, customPrice: 4 }),

            // Пицца "Чоризо фреш"
            generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20, customPrice: 4 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30, customPrice: 5 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40, customPrice: 6 }),

            // Остальные продукты
            generateProductItem({ productId: 1 }),
            generateProductItem({ productId: 2 }),
            generateProductItem({ productId: 3 }),
            generateProductItem({ productId: 4 }),
            generateProductItem({ productId: 5 }),
            generateProductItem({ productId: 6 }),
            generateProductItem({ productId: 7 }),
            generateProductItem({ productId: 8 }),
            generateProductItem({ productId: 9 }),
            generateProductItem({ productId: 10 }),
            generateProductItem({ productId: 11 }),
            generateProductItem({ productId: 12 }),
            generateProductItem({ productId: 13 }),
            generateProductItem({ productId: 14 }),
            generateProductItem({ productId: 15 }),
            generateProductItem({ productId: 16 }),
            generateProductItem({ productId: 17 }),
            generateProductItem({ productId: 18 }),
            generateProductItem({ productId: 19 }),
            generateProductItem({ productId: 20 }),
            generateProductItem({ productId: 21 }),
            generateProductItem({ productId: 22 }),
            generateProductItem({ productId: 23 }),
            generateProductItem({ productId: 24 }),
            generateProductItem({ productId: 25 }),
        ],
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22222'
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
            }, 
        },
    });

    await prisma.story.createMany({
        data: [
          {
            previewImageUrl:
              PizzaFest.preview,
          },
          {
            previewImageUrl:
              Eyes.preview,
          },
          {
            previewImageUrl:
              SelectionForYou.preview,
          },
          {
            previewImageUrl:
              Fact.preview,
          },
          {
            previewImageUrl:
              Coffe.preview,
          },
          {
            previewImageUrl:
              Meat.preview,
          },
        ],
    });
    
    await prisma.storyItem.createMany({
        data: [
            {
            storyId: 1,
            sourceUrl:
                'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
            },
            {
            storyId: 1,
            sourceUrl:
                'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
            },
            {
            storyId: 1,
            sourceUrl:
                'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
            },
            {
            storyId: 1,
            sourceUrl:
                'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
            },
        ],
    });  
}

async function down(){
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`;
}

async function main(){
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });