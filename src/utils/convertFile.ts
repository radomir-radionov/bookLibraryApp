import { Dispatch, SetStateAction } from 'react';

export const convertFile = (file: File, setImage: Dispatch<SetStateAction<string | undefined>>) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    setImage(reader.result?.toString());
  };
  reader.readAsDataURL(file);
};
