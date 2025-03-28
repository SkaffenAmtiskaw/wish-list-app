import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

import { providers, signIn } from '@/auth';

import { redirect } from 'next/navigation';

type Props = {
  searchParams: Promise<{
    url: string;
  }>
}

export default async ({ searchParams }: Props) => {
  const { url } = await searchParams;

  return providers.map((provider) =>(
    <Button
      variant="contained"
      onClick={async () => {
        'use server';

        await signIn(provider.id, { redirectTo: decodeURIComponent(url) });
      }}
    >
      <GoogleIcon sx={{ paddingRight: 1 }} />
      Sign In
    </Button>
  ));
};
