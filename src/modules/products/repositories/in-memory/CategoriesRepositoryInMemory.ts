import { IStoreCategoryDTO } from "@Modules/products/dtos";
import { Category } from "@Modules/products/infra/typeorm/entities/Category";

import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async store({ name, description }: IStoreCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }

  async findAll(name?: string): Promise<Category[]> {
    this.categories.filter((category) => name && category.name === name);
    return this.categories;
  }

  async updateById(
    id: string,
    name: string,
    description: string
  ): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);

    category.name = name;
    category.description = description;

    return category;
  }

  async removeById(id: string): Promise<void> {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id
    );

    this.categories.splice(categoryIndex, 1);
  }
}

export { CategoriesRepositoryInMemory };
