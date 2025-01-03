import { Header as StyledHeader, Heading, Skeleton } from 'grommet';
import { Suspense } from 'react';

import { Avatar } from './Avatar';

export const Header = () => (
  <StyledHeader background="main" gridArea="header">
    <Heading margin="small" size="small">
      Wish Lists
    </Heading>
    <Suspense
      fallback={
        <Skeleton
          height="xxsmall"
          margin="small"
          round="full"
          width="xxsmall"
        />
      }
    >
      <Avatar />
    </Suspense>
  </StyledHeader>
);
