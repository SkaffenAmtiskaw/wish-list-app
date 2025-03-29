'use client';

import Button from '@mui/material/Button';

import { useCloseDropdown } from '@/_components/Dropdown';

import { logout } from './actions';

export const Logout = () => {
  const close = useCloseDropdown();

  return (
    <Button
      onClick={async () => {
        close();
        await logout();
      }}
    >
      LOGOUT
    </Button>
  );
};
