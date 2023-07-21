import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  login: string()
    .required(hintText.EMPTY_FIELD)
    .matches(RegExp.latinLetters, 'латинский алфавит')
    .matches(RegExp.digit, 'цифры'),
  password: string()
    .required(hintText.EMPTY_FIELD)
    .matches(RegExp.minQtyOfChars, { message: 'не менее 8 символов' })
    .matches(RegExp.capitalLetter, { message: 'с заглавной буквой' })
    .matches(RegExp.digit, { message: 'цифрой' }),
  firstName: string().required(hintText.EMPTY_FIELD),
  lastName: string().required(hintText.EMPTY_FIELD),
  phone: string().required(hintText.EMPTY_FIELD).matches(RegExp.phone, hintText.VALID_PHONE_NUMBER),
  email: string().required(hintText.EMPTY_FIELD).matches(RegExp.email, hintText.INVALID_EMAIL),
});

export default schema;
