export interface TCategory {
  id: number;
  name: string;
  path: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface TExtendedCategory extends TCategory {
  quantity?: number;
}
