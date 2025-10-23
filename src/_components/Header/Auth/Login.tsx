'use client';

import Button from '@mui/material/Button';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCloseDropdown } from '@/_components/Dropdown';

export const Login = () => {
  const close = useCloseDropdown();
  const pathname = usePathname();

  return (
    <Button
      component={Link}
      href={`/login?redirect=${encodeURIComponent(pathname)}`}
      onClick={close}
    >
      LOGIN
    </Button>
  );
};
