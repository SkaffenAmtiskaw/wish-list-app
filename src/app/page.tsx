import { Button } from 'grommet';

import { signIn, signOut } from '@/auth';

const Page = () => (
  <>
    <Button
      onClick={async () => {
        'use server';
        await signIn();
      }}
    >
      LOGIN
    </Button>
    <Button
      onClick={async () => {
        'use server';
        await signOut();
      }}
    >
      LOGOUT
    </Button>
  </>
);

export default Page;
