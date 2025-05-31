import type { User as AuthUser } from 'next-auth';
import Link from 'next/link';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { User } from '@/_models'

import { UserList } from './UserList';

type Props = {
  user: AuthUser;
}

export const UserLists = async ({ user: authUser }: Props) => {
  const user = await User.findById(authUser.email).populate({ path: 'lists' }).populate({ path: 'bookmarks' });

  return (
    <Stack>
      <Button component={Link} href="/create" startIcon={<AddIcon />} variant="outlined">Add New List</Button>
      {/* @ts-ignore */}
      <UserList label="Lists" items={user?.lists || []} />
      {/* @ts-ignore */}
      <UserList label="Bookmarks" items={user?.bookmarks || []} />
    </Stack>
  );
}