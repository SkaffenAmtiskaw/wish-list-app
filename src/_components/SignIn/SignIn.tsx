import { providerMap, signIn } from '@/auth';

type Props = {
  redirect: string;
};

export const SignIn = ({ redirect }: Props) =>
  providerMap.map(({ Button, id }) => (
    <Button
      key={id}
      onClick={async () => {
        'use server';

        await signIn(id, { redirectTo: decodeURIComponent(redirect) });
      }}
    />
  ));
