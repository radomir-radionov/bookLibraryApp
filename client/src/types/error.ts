export type TErrorResponse = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
};
