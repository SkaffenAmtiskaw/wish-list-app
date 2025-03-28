'use client';

import { useState } from 'react';

import { DropdownContext } from './DropdownContext';

type Props = {
  children: React.ReactNode;
};

export const DropdownProvider = ({ children }: Props) => {
  const value = useState<boolean>(false);

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
