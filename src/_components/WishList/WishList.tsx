import * as React from 'react';

import type { ListInterface } from '@/_models';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

type Props = {
  list: ListInterface;
};

export const WishList = ({ list }: Props) => {
  return list.groups.map((group) => (
    <React.Fragment key={group.id}>
      <Typography component="h3" variant="h6" key={group._id.toString()}>
        {group.name}
      </Typography>
      {group.items.map((item) => (
        <Card>
          <Typography component="h4" variant="h4">
            {item.name}
          </Typography>
        </Card>
      ))}
    </React.Fragment>
  ));
};
