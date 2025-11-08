import type { User as AuthUser } from 'next-auth';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { User } from '@/_models';

import { UserLinkList } from './UserLinkList';

type Props = {
  user: AuthUser;
};

export const UserLinks = async ({ user: authUser }: Props) => {
  const user = await User.findById(authUser.email)
    .populate({ path: 'lists' })
    .populate({ path: 'bookmarks' });

  return (
    <Stack>
      <Button href="/create" startIcon={<AddIcon />} variant="outlined">
        Add New List
      </Button>
      {/* @ts-ignore */}
      <UserLinkList label="Lists" items={user?.lists || []} />
      {/* @ts-ignore */}
      <UserLinkList label="Bookmarks" items={user?.bookmarks || []} />
    </Stack>
  );
};
