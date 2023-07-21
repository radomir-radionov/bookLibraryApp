import hintText from 'constants/hintText';

import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
  firstName: string().required(hintText.EMPTY_FIELD),
  lastName: string().required(hintText.EMPTY_FIELD),
});

export default schema;
