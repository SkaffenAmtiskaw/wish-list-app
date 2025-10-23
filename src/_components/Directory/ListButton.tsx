'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

import ListItemButton from '@mui/material/ListItemButton';
import { alpha, styled } from '@mui/material/styles';

type ListButtonProps = {
  children: React.ReactNode;
  href: string;
  id: string;
};

const StyledListButton = styled(ListItemButton)(({ theme, selected }) => ({
  backgroundColor: selected
    ? alpha(theme.palette.primary.light, 0.4)
    : 'inherit',
  marginLeft: theme.spacing(-3),
  marginRight: theme.spacing(-3),
  paddingLeft: theme.spacing(4.5),
  paddingRight: theme.spacing(4.5),
}));

export const ListButton = ({ id, ...props }: ListButtonProps) => {
  const [_, selectedId] = useSelectedLayoutSegments();

  return <StyledListButton selected={id === selectedId} {...props} />;
};
