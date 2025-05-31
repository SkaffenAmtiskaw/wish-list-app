import { auth } from '@/auth';
import { User } from '@/_models';

export const getUser = async () => {
  const session = await auth();

  if (!session) return undefined;

  return User.findById(session.user?.email);
};
