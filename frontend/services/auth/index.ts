import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/',
    signOut: '/auth/login',
    error: '/auth',
    newUser: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req): Promise<any> {
        try {
          console.log('Authorize Method', credentials)
          const user = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            })
          })

          if(!user.ok){
            throw new Error('Erro ao enviar a requisiçao de login')
          }

          const data = await user.json();

          return data;
        } catch (error) {
          console.log(error)
        }
        
      },
    }),
  ],
  callbacks: {
    async jwt({ session, token, user }) {
      console.log('JWT CALLBACK', { token, user, session })
      if (user) {
        return {
          ...token,
          email: user.email,
        }
      }

      return token
    },
    async session({ session, token, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      console.log('SESSION CALLBACK', session)
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
})