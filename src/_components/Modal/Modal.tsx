'use client';

import { useRouter } from 'next/navigation';

import BaseModal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

import { Close } from './Close';

type Props = {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  const router = useRouter();

  return (
    <BaseModal open onClose={router.back}>
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          p: 4,
        }}
      >
        <Close />
        {children}
      </Paper>
    </BaseModal>
  );
};