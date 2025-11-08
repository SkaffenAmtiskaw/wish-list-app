import { usePathname, useRouter } from 'next/navigation';

export const useAddQuery = () => {
  const path = usePathname();
  const router = useRouter();

  return (query: string) => {
    router.push(`${path}?${query}`);
  };
};
