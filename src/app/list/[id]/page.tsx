import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { addGroup, bookmarkList } from '@/_actions';
import { List } from '@/_models';
import { getUser, isListBookmarked, isListOwner } from '@/_utils';

type Params = Promise<{
  id: string;
}>;

type Props = {
  params: Params;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const user = await getUser();
  const isAdmin = await isListOwner(id);
  const isBookmarked = await isListBookmarked(id);

  const list = await List.findById(id).exec();

  if (!list) throw new Error(`list ${id} not found`);

  const handleClick = async () => {
    'use server';

    await bookmarkList(id);
  };

  return (
    <Stack>
      {!!user && !isAdmin && (
        <Button
          disabled={isBookmarked}
          sx={{ alignSelf: 'end' }}
          variant="outlined"
          onClick={handleClick}
        >
          <BookmarkIcon />
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </Button>
      )}
      {isAdmin && (
        <form action={addGroup}>
          <input style={{ display: 'none' }} name="list" readOnly value={id} />
          <Input name="name" />
          <Button type="submit">Add Group</Button>
        </form>
      )}

      {list.groups.map((group) => (
        <div key={group._id.toString()}>{group.name}</div>
      ))}
    </Stack>
  );
};

export default Page;
