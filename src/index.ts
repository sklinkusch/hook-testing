import { useState } from 'react';

export function useForm(formData: any) {
  const [values, setValues] = useState(formData);

  return {
    values,
    setValues,
  };
}
