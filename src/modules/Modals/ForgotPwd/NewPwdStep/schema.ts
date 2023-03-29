import hintText from 'constants/hintText';

import { RegExp } from 'utils/regExp';
import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  password: string()
    .required(hintText.EMPTY_FIELD)
    .matches(RegExp.minQtyOfChars, { message: 'не менее 8 символов' })
    .matches(RegExp.capitalLetter, { message: 'с заглавной буквой' })
    .matches(RegExp.digit, { message: 'цифрой' }),
  passwordConfirmation: string()
    .required(hintText.EMPTY_FIELD)
    .oneOf([yup.ref('password'), null], hintText.DIFFERENT_PASSWORD),
});

export default schema;
