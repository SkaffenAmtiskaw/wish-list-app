import type { ObjectId } from 'mongoose';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Avatar from '@mui/material/Avatar';
import type { AvatarProps } from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { ListButton } from './ListButton';

type Props = {
  label: string;
  items: {
    _id: ObjectId;
    name: string;
    img?: string;
  }[];
};

const StyledAvtar = (props: AvatarProps) => {
  const { sx, ...rest } = props;

  return (
    <Avatar
      sx={{ ...sx, bgcolor: 'transparent', height: 24, width: 24 }}
      {...rest}
    />
  );
};

export const UserLinkList = ({ label, items }: Props) => (
  <List
    dense
    subheader={
      <ListSubheader component="div" sx={{ bgcolor: 'transparent' }}>
        {label}
      </ListSubheader>
    }
  >
    {items.map(({ name, img, _id }) => (
      <ListButton
        href={`/list/${_id.toString()}`}
        id={_id.toString()}
        key={_id.toString()}
      >
        <ListItemAvatar sx={{ minWidth: 0, paddingRight: 1 }}>
          {img ? (
            <StyledAvtar src={img} />
          ) : (
            <StyledAvtar>
              <CardGiftcardIcon color="action" />
            </StyledAvtar>
          )}
        </ListItemAvatar>
        <ListItemText>{name}</ListItemText>
      </ListButton>
    ))}
  </List>
);
