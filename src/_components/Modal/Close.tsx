'use client';

import { useRouter } from 'next/navigation';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export const Close = () => {
  const router = useRouter();

  return (
    <IconButton
      sx={{ position: 'absolute', top: 2, right: 2 }}
      onClick={router.back}
    >
      <CloseIcon />
    </IconButton>
  );
};
