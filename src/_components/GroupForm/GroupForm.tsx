import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import { addGroup } from '@/_actions';

type Props = {
  list: string;
  operation: 'create' | 'edit';
};

const OPERATIONS = {
  create: addGroup,
  edit: () => {},
}

export const GroupForm = ({ list, operation }: Props) => {
  const action = OPERATIONS[operation];

  return (
    <form action={action}>
      <input style={{ display: 'none' }} name="list" readOnly value={list} />
      <Input name="name" />
      <Button type="submit">Add Group</Button>
    </form>
  );
}
