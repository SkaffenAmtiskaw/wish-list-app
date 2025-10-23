'use server';

import { List } from '@/_models';

import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';

export const addGroup = async (data: FormData) => {
  const id = data.get('list');

  const list = await List.findById(id);

  if (!list) throw new Error(`list ${id} not found`);

  list.groups.push({
    name: data.get('name') as string,
    items: [],
  });

  await list.save();

  revalidatePath(`/list/${id}`);
  redirect(`/list/${id}`);
};
