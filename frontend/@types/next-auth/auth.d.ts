import 'next-auth' 
import NextAuth from 'next-auth' 
import * as auth from 'next-auth' 

declare module "next-auth" {
  interface User {
    id: string | number;
    email: string;
  }

  interface Session {
    user: User;
  }
}