import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("products")
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  categoryId: string;

  @Column()
  name: string;

  @Column()
  manufacturingDate: Date;

  @Column()
  perishableProduct: boolean;

  @Column()
  expirationDate: Date;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
