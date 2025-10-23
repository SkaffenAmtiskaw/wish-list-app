import Stack from '@mui/material/Stack';

import { Bookmark } from '@/_components/Bookmark';
import { Invite } from '@/_components/Invite';
import { Modal } from '@/_components/Modal';
import { WishList } from '@/_components/WishList';
import { List } from '@/_models';
import { getUser, isListBookmarked, isListOwner } from '@/_utils';

import Typography from '@mui/material/Typography';

import { ModalContent } from './_components/ModalContent';
import type { ModalProps } from './_components/ModalContent';

type Params = {
  id: string;
}

type ModalParams = Pick<ModalProps, 'type' | 'operation'>

type SearchParams = {} | ModalParams;

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

const Page = async ({ params, searchParams }: Props) => {
  const { id } = await params;

  const query = await searchParams;

  const isModalOpen = (q: SearchParams): q is ModalParams => q.hasOwnProperty('type');

  const user = await getUser();
  const isAdmin = await isListOwner(id);
  const isBookmarked = await isListBookmarked(id);

  const list = await List.findById(id).exec();

  if (!list) throw new Error(`list ${id} not found`);

  return (
    <>
      {isModalOpen(query) && (
        <Modal>
          <ModalContent list={id} operation={query.operation} type={query.type} />
        </Modal>
      )}
      <Stack padding={3}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Typography component="h2" variant="h3">
            {list.name}
          </Typography>
          {!!user && !isAdmin && <Bookmark disabled={isBookmarked} list={id} />}
          {isAdmin && <Invite list={id} />}
        </Stack>
        <WishList list={list} />
      </Stack>
    </>
  );
};

export default Page;
