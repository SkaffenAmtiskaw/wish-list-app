'use server';

import { List } from '@/_models';

import { revalidatePath } from 'next/cache';

export const editGroup = async (data: FormData) => {
  const listId = data.get('list') as string;
  const groupId = data.get('id') as string;
  const groupName = data.get('name') as string;

  const list = await List.findById(listId);

  if (!list) throw new Error(`list ${listId} not found`);

  const group = list.groups.find((group) => group.id === groupId);

  if (!group) throw new Error(`group ${groupId} not found in list ${listId}`);

  group.name = groupName;

  await list.save();

  revalidatePath(`/list/${listId}`);
};
