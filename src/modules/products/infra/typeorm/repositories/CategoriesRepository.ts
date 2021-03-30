import { getRepository, Repository } from "typeorm";

import { IStoreCategoryDTO } from "@Modules/products/dtos";
import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async store({ name, description }: IStoreCategoryDTO): Promise<Category> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const categories = await this.repository.findOne({ name });
    return categories;
  }

  async findAll(id?: string, name?: string): Promise<Category[]> {
    const categoriesQuery = this.repository.createQueryBuilder("c");

    if (id) {
      categoriesQuery.andWhere("c.id = :id", { id });
    }

    if (name) {
      categoriesQuery.andWhere("c.name = :name", { name });
    }

    const categories = await categoriesQuery.getMany();

    return categories;
  }

  async updateById(
    id: string,
    name: string,
    description: string
  ): Promise<Category> {
    await this.repository
      .createQueryBuilder("c")
      .update(Category)
      .set({ name, description })
      .where("id = :id", { id })
      .execute();

    const category = await this.repository.findOne({ id });

    return category;
  }

  async removeById(id: string): Promise<void> {
    await this.repository
      .createQueryBuilder("c")
      .delete()
      .from(Category)
      .where("id = :id", { id })
      .execute();
  }
}

export { CategoriesRepository };
