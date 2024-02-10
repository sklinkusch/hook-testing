import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useForm(formData: any) {
  const [values, setValues] = useState(formData);

  return {
    values,
    setValues,
  };
}
