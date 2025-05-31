'use server';

import { getUser } from '@/_utils';
import { Types } from 'mongoose';

export const bookmarkList = async (id: string) => {
  const user = await getUser();

  if (!user) throw new Error('User not found');

  user.bookmarks.push(new Types.ObjectId(id));

  await user.save();
};
