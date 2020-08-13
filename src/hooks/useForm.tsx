import { useState, ChangeEvent } from 'react';

type useFormPropsInterface = object;
type useFormReturnInterface = [any, (e: ChangeEvent<any>) => void, (newForm?: any) => void];

export const useForm = (initalState: useFormPropsInterface): useFormReturnInterface => {
  const [form, setForm] = useState<object | null>(initalState);

  const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value }
    } = e;
    setForm((oldValues: object) => ({
      ...(oldValues as object),
      [name]: value
    }));
  };

  const resetForm = (newFormState = initalState): void => {
    setForm(newFormState);
  };
  return [form, handleForm, resetForm];
};
