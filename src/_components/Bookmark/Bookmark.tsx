import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';

import { bookmarkList } from '@/_actions';

type Props = {
  disabled: boolean;
  list: string;
};

export const Bookmark = ({ disabled, list }: Props) => {
  const handleClick = async () => {
    'use server';

    await bookmarkList(list);
  };

  return (
    <Button
      disabled={disabled}
      sx={{ gap: 0.5 }}
      variant="outlined"
      onClick={handleClick}
    >
      <BookmarkIcon />
      {disabled ? 'Bookmarked' : 'Bookmark'}
    </Button>
  );
};
