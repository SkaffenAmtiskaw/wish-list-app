import { auth } from '@/auth';

import { Login } from './Login';
import { Logout } from './Logout';

export const Auth = async () => {
  const session = await auth();

  return session?.user ? <Logout /> : <Login />;
};
