import { providerMap, signIn } from '@/auth';

type Props = {
  searchParams: Promise<{
    redirect: string;
  }>
}

export default async ({ searchParams }: Props) => {
  const { redirect } = await searchParams;

  return providerMap.map(({ Button, id }) =>(
    <Button
      onClick={async () => {
        'use server';

        await signIn(id, { redirectTo: decodeURIComponent(redirect) });
      }}
    />
  ));
};
