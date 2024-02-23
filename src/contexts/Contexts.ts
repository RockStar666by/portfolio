import { createContext, SetStateAction, Dispatch } from 'react';

interface ILoaderContext {
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export const LoaderContext = createContext<ILoaderContext>({
  loader: false,
  //eslint-disable-next-line
  setLoader: () => { }
});
