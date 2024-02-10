import { useTheme } from '../src/index';
import { renderHook } from '@testing-library/react-hooks';

describe('tests on useTheme', () => {
  test('returns the theme settings', () => {
    const localStorage = {
      getItem: (key: string) => key,
      setItem: (key: string, value: string) => {
        console.log(`${key}: ${value}`);
      },
      removeItem: (key: string) => {
        console.log(`${key} removed`);
      },
      clear: () => console.log('clear'),
    };
    const { result } = renderHook(() => useTheme(localStorage));
    expect(result).toBeDefined();
  });
});
