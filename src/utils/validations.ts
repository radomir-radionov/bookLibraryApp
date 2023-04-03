import { RegExp } from 'constants/regExp';

export const validateLogin = (value: string) =>
  !RegExp.digit.test(value as string) || !RegExp.latinLetters.test(value as string);

export const validatePassword = (value: string) =>
  RegExp.password.test(value as string) || 'Пароль не менее 8 символов, с заглавной буквой и цифрой';

export const validateForDigit = (value: string) => value?.split('').some((el) => RegExp.digit.test(el));

export const validateForLatinLetters = (value: string) => value?.split('').some((el) => RegExp.latinLetters.test(el));
export const validateForUppercase = (value: string) => value?.split('').some((el) => RegExp.uppercase.test(el));
export const validateForQtyOfCharacters = (value: string) => value?.length >= 8;

export const isPasswordCorrect = (value: string) =>
  validateForLatinLetters(value) && validateForLatinLetters(value) && validateForQtyOfCharacters(value);
