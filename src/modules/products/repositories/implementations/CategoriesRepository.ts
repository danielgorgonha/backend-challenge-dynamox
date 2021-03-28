import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO, IDeleteCategoryDTO } from "../../dtos";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async store({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async updateById({
    id,
    name,
    description,
  }: IDeleteCategoryDTO): Promise<void> {
    await this.repository.update(id, {
      name,
      description,
    });
  }
  async findByName(name: string): Promise<Category> {
    const categories = await this.repository.findOne({ name });
    return categories;
  }
  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);
    return category;
  }
}

export { CategoriesRepository };
