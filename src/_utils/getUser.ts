import { User } from '@/_models';
import { auth } from '@/auth';

export const getUser = async () => {
  const session = await auth();

  if (!session) return undefined;

  return User.findById(session.user?.email);
};
