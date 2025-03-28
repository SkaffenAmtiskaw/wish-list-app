import Stack from '@mui/material/Stack';

import { HEADER_HEIGHT } from '@/constants';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => (
  <Stack
    direction="row"
    sx={{ height: `calc(100% - ${HEADER_HEIGHT}px)`, width: '100%' }}
  >
    {children}
  </Stack>
);
