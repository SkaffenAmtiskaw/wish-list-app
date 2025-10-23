'use client';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import { useAddQuery } from './useAddQuery';

type Props = {
  actions: {
    icon: React.ReactNode;
    label: string;
    query: string;
  }[];
};

export const FAB = ({ actions }: Props) => {
  const addQuery = useAddQuery();

  return (
    <SpeedDial
      ariaLabel="Add Group/Item"
      icon={<SpeedDialIcon />}
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
    >
      {actions.map(({ icon, label, query }) => (
        <SpeedDialAction
          icon={icon}
          key={label}
          slotProps={{
            tooltip: {
              title: label,
            },
          }}
          onClick={() => addQuery(query)}
        />
      ))}
    </SpeedDial>
  );
};
