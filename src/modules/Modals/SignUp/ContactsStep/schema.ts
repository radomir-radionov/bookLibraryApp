import hintText from 'constants/hintText';
import { RegExp } from 'constants/regExp';

import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  phone: string().required(hintText.EMPTY_FIELD).matches(RegExp.phone, hintText.VALID_PHONE_NUMBER),
  email: string().required(hintText.EMPTY_FIELD).matches(RegExp.email, hintText.INVALID_EMAIL),
});

export default schema;
