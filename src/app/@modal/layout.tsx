'use client';

import { Modal } from '@/_components/Modal';

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => (
  <Modal>
    {children}
  </Modal>
);

export default Layout;
