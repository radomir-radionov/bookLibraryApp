export interface TCategory {
  name: string;
  path: string;
  id: number;
}

export interface TExtendedCategory extends TCategory {
  quantity?: number;
}
