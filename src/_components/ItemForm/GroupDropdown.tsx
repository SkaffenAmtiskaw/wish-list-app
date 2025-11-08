'use client';

import Autocomplete from '@mui/material/Autocomplete';
import NoSsr from '@mui/material/NoSsr';
import TextField from '@mui/material/TextField';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

export const GroupDropdown = ({ options }: Props) => (
  <NoSsr>
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField label="Group" name="group" {...params} />
      )}
    />
  </NoSsr>
);
