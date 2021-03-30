import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class StoreProducts1616929657777 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "categoryId",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "manufacturingDate",
            type: "timestamp",
          },
          {
            name: "perishableProduct",
            type: "boolean",
            default: false,
          },
          {
            name: "expirationDate",
            type: "timestamp",
          },
          {
            name: "price",
            type: "decimal(5,2)",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKCategoryProduct",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["categoryId"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
