import Skeleton from '@mui/material/Skeleton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Suspense } from 'react'

import { Avatar } from './Avatar'
import { Bar } from './Bar'

export const Header = () => (
  <Bar>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography component="h1" variant="h4">
        Wish Lists
      </Typography>
      <Suspense
        fallback={<Skeleton variant="circular" height={48} width={48} />}
      >
        <Avatar />
      </Suspense>
    </Toolbar>
  </Bar>
)
