'use client';

import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <Modal open onClose={router.back}>
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          p: 4,
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
};

export default Layout;
