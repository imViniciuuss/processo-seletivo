'use client'

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

export default function BtnLogout() {
  return (
    <Button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}>Sair</Button>
  )
}
