import { useLayoutEffect, useState } from 'react';
import { AdminProps } from 'react-admin';
import { useLocalStorage } from 'usehooks-ts';
import { themeOptions as darkTheme } from './assets/dark.ts';
import { themeOptions as lightTheme } from './assets/light.ts';

const getTheme = (displayMode = 1) => {
  return displayMode === 1 ? 'dark' : 'light';
};

export const useTheme = () => {
  const [displayMode] = useLocalStorage('sedna.cloud.frontend.displayMode', 1);
  const setStoreTheme = useLocalStorage<'dark' | 'light'>('RaStore.theme', 'dark')[1];
  const [defaultTheme, setDefaultTheme] = useState<AdminProps['defaultTheme']>(getTheme(displayMode));

  useLayoutEffect(() => {
    setStoreTheme(getTheme(displayMode));
    setDefaultTheme(getTheme(displayMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayMode]);

  return { defaultTheme, lightTheme, darkTheme };
};
