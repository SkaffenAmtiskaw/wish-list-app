import { addItem } from '@/_actions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { List } from '@/_models';
import { GroupDropdown } from './GroupDropdown';

type Props = {
  list: string;
  operation: 'create' | 'edit';
};

const OPERATIONS = {
  create: addItem,
  edit: () => {},
};

export const ItemForm = async ({ list: listId, operation }: Props) => {
  const action = OPERATIONS[operation];

  const list = await List.findById(listId);

  if (!list)
    throw new Error('tried to render group dropdown with invalid list id');

  return (
    <Stack action={action} component="form" spacing={1}>
      <input style={{ display: 'none' }} name="list" readOnly value={listId} />
      <TextField label="Name" name="name" required />
      <GroupDropdown
        options={list.groups.map((group) => ({
          label: group.name,
          value: group.id,
        }))}
      />
      <TextField label="Description" name="description" multiline />
      <TextField label="URL" name="url" />
      <Button type="submit">Add Item</Button>
    </Stack>
  );
};
