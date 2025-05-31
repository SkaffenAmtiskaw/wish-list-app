import { SignIn } from '@/_components';

type Props = {
  searchParams: Promise<{
    redirect: string;
  }>
}

const Page = async ({ searchParams }: Props) => {
  const { redirect } = await searchParams;

  return <SignIn redirect={redirect} />;
}

export default Page;
