import { TCategory } from 'types/categories';

export type CategoriesStateProps = {
  categories: TCategory[];
  isCategoriesLoading: boolean;
  categoriesError: { isError: boolean; message: string };
};
