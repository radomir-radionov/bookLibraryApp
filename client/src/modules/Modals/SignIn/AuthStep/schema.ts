import hintText from 'constants/hintText';

import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  identifier: string().required(hintText.EMPTY_FIELD),
  password: string().required(hintText.EMPTY_FIELD),
});

export default schema;
