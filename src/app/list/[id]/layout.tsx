import { FAB } from '@/_components/FAB';
import { isListOwner } from '@/_utils';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

type Params = Promise<{
  id: string;
}>;

type Props = {
  children: React.ReactNode;
  params: Params;
};

const Layout = async ({ children, params }: Props) => {
  const { id } = await params;

  const isAdmin = await isListOwner(id);

  return (
    <>
      {children}
      {isAdmin && (
        <FAB
          actions={[
            {
              query: new URLSearchParams({ type: 'item', operation: 'create' }).toString(),
              icon: <CardGiftcardIcon />,
              label: 'Add Item',
            },
            {
              query: new URLSearchParams({ type: 'group', operation: 'create' }).toString(),
              icon: <CreateNewFolderIcon />,
              label: 'Add Group',
            },
          ]}
        />
      )}
    </>
  );
};

export default Layout;
