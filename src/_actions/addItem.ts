'use server';

import { List } from '@/_models';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addItem = async (data: FormData) => {
  const listId = data.get('list') as string;

  const list = await List.findById(listId);

  if (!list) throw new Error(`list ${listId} not found`);

  const groupId = data.get('group') as string;

  const group = list.groups.find((group) => group.id === groupId);

  if (!group) {
    list.groups.push({
      name: groupId,
      items: [
        {
          name: data.get('name') as string,
          description: (data.get('description') as string) || undefined,
          url: (data.get('url') as string) || undefined,
        },
      ],
    });
  } else {
    group.items.push({
      name: data.get('name') as string,
      description: (data.get('description') as string) || undefined,
      url: (data.get('url') as string) || undefined,
    });
  }

  await list.save();

  revalidatePath(`/list/${listId}`);
  redirect(`/list/${listId}`);
};
