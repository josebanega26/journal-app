import { useState, ChangeEvent } from 'react';

type useFormPropsInterface = object;
type useFormReturnInterface = [any, (e: ChangeEvent<any>) => void, () => void];

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

  const resetForm = (): void => {
    setForm(initalState);
  };
  return [form, handleForm, resetForm];
};
