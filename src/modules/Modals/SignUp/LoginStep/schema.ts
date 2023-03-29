import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  username: string()
    .required(hintText.EMPTY_FIELD)
    .matches(RegExp.lattinLetters, 'латинский алфавит')
    .matches(RegExp.digit, 'цифры'),
  password: string()
    .required(hintText.EMPTY_FIELD)
    .matches(RegExp.minQtyOfChars, { message: 'не менее 8 символов' })
    .matches(RegExp.capitalLetter, { message: 'с заглавной буквой' })
    .matches(RegExp.digit, { message: 'цифрой' }),
});

export default schema;
