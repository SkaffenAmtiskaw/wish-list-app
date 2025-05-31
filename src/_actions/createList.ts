'use server';

import { redirect } from 'next/navigation';

import { List } from '@/_models';
import { getUser } from '@/_utils';

export const createList = async (data: FormData) => {
  const user = await getUser();

  if (!user) throw new Error('User not found');

  const list = await List.create({
    name: data.get('name'),
    img: data.get('image'),
    groups: [],
  });

  user.lists.push(list._id);

  await user.save();

  const url = `/list/${list._id.toString()}`;

  return redirect(url);
};
