'use server';

import { getUser } from '@/_utils';

export const isListOwner = async (id: string): Promise<boolean> => {
  const user = await getUser();

  if (!user) return false;

  return user?.lists.some((value) => value.toString() === id);
};
