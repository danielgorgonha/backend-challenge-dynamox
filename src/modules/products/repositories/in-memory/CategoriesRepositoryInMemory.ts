import { ICreateCategoryDTO } from "@Modules/products/dtos";
import { Category } from "@Modules/products/infra/typeorm/entities/Category";

import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async store({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }
  async list(): Promise<Category[]> {
    const all = this.categories;
    return all;
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async updateById({ id, name, description }: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
  async findById(id: string): Promise<Category> {
    throw new Error("Method not implemented.");
  }
}

export { CategoriesRepositoryInMemory };
