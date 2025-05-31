import { auth } from '@/auth';

import { UserLists } from './UserLists';

export const Directory = async () => {
  const session = await auth();

  if (session?.user) {
    return <UserLists user={session.user} />;
  }

  return 'Hello Sidebar';
};