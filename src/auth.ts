import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import { Google as GoogleButton } from '@/_components/auth';
import { User } from '@/_models';

const providers = [Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET })];

export const providerMap = providers.map(({ id }) => ({
  id,
  Button: GoogleButton,
}));

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    signIn: async ({  user }) => {
      const dbUser = await User.findById(user.email);

      if (!dbUser) {
        await User.create({
          _id: user.email,
          name: user.name,
          lists: [],
          bookmarks: [],
        })
      }

      return true;
    }
  },
  pages: {
    signIn: '/login',
  },
  providers,
});
