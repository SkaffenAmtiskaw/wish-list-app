import { getUser } from '@/_utils';

export const isListBookmarked = async (id: string): Promise<boolean> => {
  const user = await getUser();

  if (!user) return false;

  return user?.bookmarks.some((value) => value.toString() === id);
};
