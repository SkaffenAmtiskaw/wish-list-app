import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import type { AvatarProps } from '@mui/material/Avatar';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { ObjectId } from 'mongoose';


type Props = {
  label: string;
  items: {
    _id: ObjectId;
    name: string;
    img?: string;
  }[];
}

const StyledAvtar = (props: AvatarProps)=> {
  const { sx, ...rest } = props;

  return (
    <Avatar sx={{ ...sx, bgcolor: 'transparent', height: 24, width: 24 }} {...rest} />
  );
}

export const UserList = ({ label, items}: Props) => (
  <List dense subheader={<ListSubheader component="div" sx={{ bgcolor: 'transparent' }}>{label}</ListSubheader>}>
    {items.map(({ name, img, _id }) => (
      <ListItemButton href={`/list/${_id.toString()}`} key={_id.toString()}>
        <ListItemAvatar sx={{ minWidth: 0, paddingRight: 1 }}>
          {img ? (
            <StyledAvtar src={img} />
          ) : (
            <StyledAvtar>
              <CardGiftcardIcon color="action" />
            </StyledAvtar>
          )}
        </ListItemAvatar>
        <ListItemText>
          {name}
        </ListItemText>
      </ListItemButton>
    ))}
  </List>
)