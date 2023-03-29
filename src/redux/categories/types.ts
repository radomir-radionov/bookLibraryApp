import { CategoryProps } from 'types/categories';

export type CategoriesStateProps = {
  categories: CategoryProps[];
  isCategoriesLoading: boolean;
  categoriesError: { isError: boolean; message: string };
};
