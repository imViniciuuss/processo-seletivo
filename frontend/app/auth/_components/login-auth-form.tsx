'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const createUserFormSchema = z.object({
  email: z
    .string()
    .email('Invalid email format!')
    .toLowerCase(),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long!')
    .regex(/^[^'\";\\<>\[\]{}()+\-=#*@&$,.]+$/, 'Invalid characters found.'),
});

type CreateUserDataForm = z.infer<typeof createUserFormSchema>;

export default function UserLoginForm() {
  const router = useRouter();
  const { toast } = useToast()

  const form = useForm<CreateUserDataForm>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = async (
    data: z.infer<typeof createUserFormSchema>,
  ) => {
    try {
      const res = await signIn<'credentials'>('credentials', {
        ...data,
        redirect: false,
      })

      if (res?.error) {
        toast({
          title: 'Error!',
          description: 'Credenciais invalidas.',
        })
      } else {
        router.push('/')
        toast({
          title: 'Success!',
          description: 'Você logou com sucesso!',
        })
      }
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Algo deu errado.',
      })
    }
  }

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  )
}