import { useForm } from '../src/index';
import { act, renderHook } from '@testing-library/react-hooks';

describe('tests on useForm', () => {
  test('returns the state', () => {
    const testValue = 'sedna';
    const altValue = {
      title: '~sedna',
      members: [
        'Guido',
        'Torsten',
        'Aytunc',
        'Marc',
        'Jan',
        'Philipp',
        'Christoph G.',
        'Aygün',
        'Enes',
        'Sophia',
        'Phillip',
        'Randy',
        'Koray',
        'Barbara',
        'Kai',
        'Bea',
        'Alex',
        'Lars',
        'Christoph Sch.',
        'Peter',
        'Stefan',
      ],
    };
    const { result } = renderHook(() => useForm(testValue));
    expect(result.current.values).toEqual(testValue);
    act(() => {
      result.current.setValues(altValue);
    });
    expect(result.current.values).toEqual(altValue);
  });
});
