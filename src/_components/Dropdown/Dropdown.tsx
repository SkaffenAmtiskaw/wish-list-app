'use client';

import { useContext, useRef, useState } from 'react';

import ButtonBase from '@mui/material/ButtonBase';
import Popover, { type PopoverProps } from '@mui/material/Popover';

import { DropdownContext } from './DropdownContext';
import { DropdownProvider } from './DropdownProvider';

type Props = Omit<PopoverProps, 'anchorEl' | 'popover' | 'open' | 'onClose'> & {
  button: React.ReactNode;
  popover: React.ReactNode;
};

// TODO: Break this out in a cleaner way.
const DropdownInner = ({ button, popover, ...props }: Props) => {
  const ref = useRef(null);

  const [open, setOpen] = useContext(DropdownContext);

  const openDropdown = () => setOpen(true);
  const closeDropdown = () => setOpen(false);

  return (
    <>
      <ButtonBase ref={ref} onClick={openDropdown}>
        {button}
      </ButtonBase>
      <Popover
        {...props}
        anchorEl={ref.current}
        open={open}
        onClose={closeDropdown}
      >
        {popover}
      </Popover>
    </>
  );
};

export const Dropdown = (props: Props) => (
  <DropdownProvider>
    <DropdownInner {...props} />
  </DropdownProvider>
);
