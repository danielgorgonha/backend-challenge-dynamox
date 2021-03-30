import { IStoreCategoryDTO } from "../dtos";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  store({ name, description }: IStoreCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category>;
  findAll(id?: string, name?: string): Promise<Category[]>;
  updateById(id: string, name: string, description: string): Promise<Category>;
  removeById(id: string): Promise<void>;
}

export { ICategoriesRepository };
