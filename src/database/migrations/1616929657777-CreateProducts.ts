import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1616929657777 implements MigrationInterface {
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
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "manufacturingDate",
            type: "varchar",
          },
          {
            name: "perishableProduct",
            type: "boolean",
            default: false,
          },
          {
            name: "expirationDate",
            type: "varhcar ",
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
            name: "FKCategory",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["categoryId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
