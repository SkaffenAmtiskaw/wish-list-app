'use client';

import { useRouter } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Close = () => {
  const router = useRouter();

  return (
    <IconButton sx={{ position: 'absolute', top: 2, right: 2 }} onClick={router.back}>
      <CloseIcon />
    </IconButton>
  );
}