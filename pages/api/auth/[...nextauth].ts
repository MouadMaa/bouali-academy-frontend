import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token }: any) {
      session.jwt = token.jwt
      session.user.id = token.id
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        const url = new URL(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/${account.provider}/callback`,
        )
        url.searchParams.set('access_token', account.access_token as string)
        const response = await fetch(url.toString())
        const data = await response.json()
        token.jwt = data.jwt
        token.id = data.user.id
      }
      return token
    },
  },
}

export default NextAuth(authOptions)
