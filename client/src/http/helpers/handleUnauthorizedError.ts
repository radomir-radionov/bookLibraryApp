import pageRoutes from 'constants/pageRoutes';

import { AxiosError } from 'axios';

const handleUnauthorizedError = (error: AxiosError) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('userData');
    window.location.replace(pageRoutes.AUTH);
  }
};

export default handleUnauthorizedError;
