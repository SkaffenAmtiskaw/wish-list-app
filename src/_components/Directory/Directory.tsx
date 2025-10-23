import { auth } from '@/auth';

import { UserLinks } from './UserLinks';

export const Directory = async () => {
  const session = await auth();

  if (session?.user) {
    return <UserLinks user={session.user} />;
  }

  return 'Hello Sidebar';
};
