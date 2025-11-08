import type { HydratedDocument } from 'mongoose';
import * as React from 'react';

import type { ListInterface } from '@/_models';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { GroupLabel } from './GroupLabel';

type Props = {
  isAdmin: boolean;
  list: HydratedDocument<ListInterface>;
};

export const WishList = ({ isAdmin, list }: Props) => {
  return list.groups.map((group) => (
    <React.Fragment key={group.id}>
      <GroupLabel
        id={group.id}
        isAdmin={isAdmin}
        listId={list.id}
        key={group.id}
        name={group.name}
      />
      {group.items.map((item) => (
        <Card key={item.id}>
          <Typography component="h4" variant="h4">
            {item.name}
          </Typography>
        </Card>
      ))}
    </React.Fragment>
  ));
};
