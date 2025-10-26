'use client';

import { Modal } from '@/_components/Modal';

const Layout = ({ children }: Omit<LayoutProps<'/'>, 'modal'>) => (
  <Modal>
    {children}
  </Modal>
);

export default Layout;
