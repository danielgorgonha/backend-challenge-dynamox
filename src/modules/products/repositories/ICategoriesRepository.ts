import { ICreateCategoryDTO, IDeleteCategoryDTO } from "../dtos";
import { Category } from "../entities/Category";

interface ICategoriesRepository {
  store({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  delete(id: string): Promise<void>;
  updateById({ id, name, description }: IDeleteCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  findById(id: string): Promise<Category>;
}

export { ICategoriesRepository };
