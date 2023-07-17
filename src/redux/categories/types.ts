import { TCategory } from 'types/categories';

export type TCategoriesState = {
  categories: TCategory[];
  isCategoriesLoading: boolean;
  categoriesError: { isError: boolean; message: string };
};
