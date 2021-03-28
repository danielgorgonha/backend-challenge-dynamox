export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface IUpdateCategoryDTO {
  id: string;
  name: string;
  description: string;
}

export interface ICreateProductDTO {
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}

export interface IUpdateProductDTO {
  id: string;
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}
