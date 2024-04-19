'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function UserLoginForm() {
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const res = await signIn<'credentials'>('credentials', {
      ...data,
      redirect: false,
    })

    if(res?.error){
      toast({
        title: 'Error!',
        description: 'Credenciais invalidas.',
      })
    } else {
      router.push('/')
    }
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Algo deu errado.',
      })
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            {...form.register('email')}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="password"
            required
            type="password"
            {...form.register('password')}
          />
        </div>
        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  )
}