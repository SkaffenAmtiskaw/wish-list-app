'use client';

import AppBar from '@mui/material/AppBar';

type Props = {
  children: React.ReactNode;
};

export const Bar = ({ children }: Props) => (
  <AppBar
    color="primary"
    position="sticky"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    {children}
  </AppBar>
);
