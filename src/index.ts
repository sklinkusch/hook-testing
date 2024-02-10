import { useLayoutEffect, useState } from 'react';
import { AdminProps } from 'react-admin';
import { useLocalStorage } from 'usehooks-ts';
import { themeOptions as darkTheme } from './assets/dark.ts';
import { themeOptions as lightTheme } from './assets/light.ts';

const getTheme = (displayMode = 1) => {
  return displayMode === 1 ? 'dark' : 'light';
};

type LocalStorage = {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
};

export const useTheme = (localStorage: LocalStorage) => {
  const [displayMode] = useLocalStorage('sedna.cloud.frontend.displayMode', 1);
  const [defaultTheme, setDefaultTheme] = useState<AdminProps['defaultTheme']>(getTheme(displayMode));

  useLayoutEffect(() => {
    localStorage.setItem('RaStore.theme', getTheme(displayMode));
    setDefaultTheme(getTheme(displayMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayMode]);

  return { defaultTheme, lightTheme, darkTheme };
};
