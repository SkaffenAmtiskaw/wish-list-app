'use client';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { editGroup } from '@/_actions';

import { useState } from 'react';

type Props = {
  id: string;
  isAdmin: boolean;
  listId: string;
  name: string;
};

export const GroupLabel = ({ id, isAdmin, listId, name }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!isAdmin) {
    return (
      <Typography component="h3" variant="h6">
        ){name}
      </Typography>
    );
  }

  if (isEditing) {
    return (
      <Stack action={editGroup} component="form" direction="row">
        <input
          style={{ display: 'none' }}
          name="list"
          readOnly
          value={listId}
        />
        <input style={{ display: 'none' }} name="id" readOnly value={id} />
        <TextField defaultValue={name} name="name" />
        <IconButton type="submit">
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setIsEditing(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
    );
  }

  return (
    <Stack alignContent="center" direction="row" justifyContent="space-between">
      <Typography component="h3" variant="h6">
        {name}
      </Typography>
      <IconButton onClick={() => setIsEditing(true)} size="small">
        <EditIcon />
      </IconButton>
    </Stack>
  );
};
