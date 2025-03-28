import Skeleton from '@mui/material/Skeleton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Dropdown } from '@/_components';
import { HEADER_HEIGHT } from '@/constants';

import { Suspense } from 'react';

import { Auth } from './Auth';
import { Avatar } from './Avatar';
import { Bar } from './Bar';

export const Header = () => (
  <Bar>
    <Toolbar sx={{ height: HEADER_HEIGHT, justifyContent: 'space-between' }}>
      <Typography component="h1" variant="h4">
        Wish Lists
      </Typography>
      <Suspense
        fallback={<Skeleton variant="circular" height={48} width={48} />}
      >
        <Dropdown
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          button={<Avatar />}
          popover={<Auth />}
          transformOrigin={{
            vertical: -4,
            horizontal: 'right',
          }}
        />
      </Suspense>
    </Toolbar>
  </Bar>
);
