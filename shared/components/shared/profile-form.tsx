'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TFormRegisterValues, formRegisterSchema } from './modals/auth-modal/forms/schemas';
import { User } from '@prisma/client';
import toast from 'react-hot-toast';
import { signOut } from 'next-auth/react';
import { Container } from './container';
import { Title } from './title';
import { FormInput } from './form';
import { Button } from '../ui';
import { updateUserInfo } from '@/app/actions';

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success('Info updated 📝', {
        icon: '✅',
      });
    } catch (error) {
      return toast.error('Error updating data', {
        icon: '❌',
      });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <Container className="max-w-md mx-auto mt-10 p-8 bg-white rounded-md shadow-lg">
      <Title text={`Personal info | #${data.id}`} size="lg" className="text-center font-medium text-gray-900 mb-6" />

      <FormProvider {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput 
            name="email" 
            label="E-Mail" 
            required 
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800"
          />
          <FormInput 
            name="fullName" 
            label="Full name" 
            required 
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800"
          />

          <FormInput 
            type="password" 
            name="password" 
            label="New password" 
            required 
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800"
          />
          <FormInput 
            type="password" 
            name="confirmPassword" 
            label="Repeat password" 
            required 
            className="border border-gray-300 rounded-xl px-4 py-2 text-gray-800"
          />

          <Button disabled={form.formState.isSubmitting} className="text-base mt-10" type="submit">
            Save
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button">
            Log out
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
