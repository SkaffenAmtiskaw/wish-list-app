'use client';

import { useContext } from 'react';

import { DropdownContext } from './DropdownContext';

export const useCloseDropdown = () => {
  const [_, setOpen] = useContext(DropdownContext);

  return () => setOpen(false);
};
