import Paper from '@mui/material/Paper';

import { SIDEBAR_WIDTH } from '@/constants';

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => (
  <Paper
    elevation={1}
    sx={{
      width: SIDEBAR_WIDTH,
    }}
  >
    {children}
  </Paper>
);
