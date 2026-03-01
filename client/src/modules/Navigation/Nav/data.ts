import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

const navListData = [
  { id: 0, title: 'Витрина книг', link: pageRoutes.BOOKS_ALL, dataTestId: dataTestId.NAVIGATION_SHOWCASE },
  { id: 1, title: 'Правила пользования', link: pageRoutes.TERMS, dataTestId: dataTestId.NAVIGATION_TERMS },
  { id: 2, title: 'Договор оферты', link: pageRoutes.CONTRACT, dataTestId: dataTestId.NAVIGATION_CONTRACT },
];

export default navListData;
