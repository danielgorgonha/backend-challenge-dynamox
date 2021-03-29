export interface IStoreCategoryDTO {
  name: string;
  description: string;
}

export interface IStoreProductDTO {
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}
