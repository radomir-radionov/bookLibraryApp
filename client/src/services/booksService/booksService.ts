import serverEndpoints from 'constants/apiEndpoints';

import httpService from '../../http';

const booksService = {
  getBooks: async () => {
    const resp = await httpService.get(serverEndpoints.BOOKS);

    return resp.data;
  },
  getCategories: async () => {
    const resp = await httpService.get(serverEndpoints.CATEGORIES);

    return resp.data;
  },
  getBookById: async (id: number) => {
    const { data } = await httpService.get(`${serverEndpoints.BOOKS}/${id}`);
    return data;
  },
};

export default booksService;
