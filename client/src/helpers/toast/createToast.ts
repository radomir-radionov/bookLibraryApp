import { nanoid } from '@reduxjs/toolkit';

const prepareToastData = (type: string, text: string) => {
  return {
    id: nanoid(),
    type,
    text,
  };
};

export default prepareToastData;
