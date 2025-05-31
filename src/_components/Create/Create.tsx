import 'server-only';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { createList } from '@/_actions';

export const Create = () => (
  <form action={createList}>
    <Typography>Create a List</Typography>
    <TextField name="name" label="Name" required />
    <TextField name="image" label="Image" />
    <Button type="submit">Create</Button>
  </form>
);