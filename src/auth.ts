import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { Google as GoogleButton } from '@/_components/auth';

const providers = [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })];

export const providerMap = providers.map(({ id, name }) => ({
  id,
  Button: GoogleButton,
}))

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers,
});
