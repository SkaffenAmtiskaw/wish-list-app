// TODO: Make this functional

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';

type Props = {
  list: string;
};

// biome-ignore lint: This is a WIP - the list ID will be necessary once inviting users is added.
export const Invite = ({ list }: Props) => (
  <Button
    disabled // TODO
    sx={{ gap: 0.5 }}
    variant="outlined"
  >
    <PersonAddIcon />
    Invite User
  </Button>
);
