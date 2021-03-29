import { IStoreCategoryDTO } from "../dtos";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  store({ name, description }: IStoreCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepository };
