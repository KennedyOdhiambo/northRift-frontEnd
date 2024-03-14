import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { State } from '../features/booking/TravelForm';

type GlobalContext = {
  routesFilter: State | null;
  setRoutesFilter: Dispatch<SetStateAction<State | null>>;
};
export const GlobalContext = createContext<GlobalContext | null>(null);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [routesFilter, setRoutesFilter] = useState<State | null>(null);

  const values = { routesFilter, setRoutesFilter };

  return <GlobalContext.Provider value={values}> {children}</GlobalContext.Provider>;
};
