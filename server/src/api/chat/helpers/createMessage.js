import moment from 'moment';

export const createMessage = (name, text) => {
  return {
    name,
    text,
    createdAt: moment().format('LT'),
  };
};

export default createMessage;
