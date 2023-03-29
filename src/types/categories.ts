export interface CategoryProps {
  name: string;
  path: string;
  id: number;
}

export interface ExtendedCategoryProps extends CategoryProps {
  quantity?: number;
}
