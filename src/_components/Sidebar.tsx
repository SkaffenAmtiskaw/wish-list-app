'use client';

import Paper from '@mui/material/Paper';
import { alpha, useTheme } from '@mui/material/styles';

import { SIDEBAR_WIDTH } from '@/constants';

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  const { palette } = useTheme();

  return (
    <Paper
      component="aside"
      elevation={1}
      square
      sx={{
        backgroundColor: alpha(palette.primary.light, 0.2),
        paddingX: 3,
        paddingY: 2,
        width: SIDEBAR_WIDTH,
      }}
    >
      {children}
    </Paper>
  );
};
