import { Dispatch, SetStateAction, createContext } from 'react';

type Context = [open: boolean, setOpen: Dispatch<SetStateAction<boolean>>];

export const DropdownContext = createContext<Context>([false, () => {}]);
