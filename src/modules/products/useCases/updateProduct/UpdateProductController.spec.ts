import { hash } from "bcrypt";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@Shared/infra/http/app";

let connection: Connection;

describe("Update Product Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at)
        values('${id}', 'admin', 'admin@dynamox.net', '${password}', true, 'now()')
      `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to update a product", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    const category = await request(app)
      .post("/categories")
      .send({
        name: "PCategory STest 1",
        description: "PCategory STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    await request(app)
      .post("/products")
      .send({
        categoryId: category.body.id,
        name: "Products STest",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: true,
        expirationDate: new Date("2021-04-29"),
        price: 2.45,
      })
      .set({ Authorization: `Bearer ${token}` });

    const get = await request(app)
      .get("/products")
      .query({ name: "Products STest" })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .put(`/products/${get.body[0].id}`)
      .send({
        categoryId: category.body.id,
        name: "Products STest 1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: true,
        expirationDate: new Date("2021-04-29"),
        price: 2.45,
      })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
  });

  it("Should not be able to update a category already exists", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    const category = await request(app)
      .post("/categories")
      .send({
        name: "PCategory STest 1",
        description: "PCategory STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    await request(app)
      .post("/products")
      .send({
        categoryId: category.body.id,
        name: "Products STest",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: true,
        expirationDate: new Date("2021-04-29"),
        price: 2.45,
      })
      .set({ Authorization: `Bearer ${token}` });

    await request(app)
      .post("/products")
      .send({
        categoryId: category.body.id,
        name: "Products STest 1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: true,
        expirationDate: new Date("2021-04-29"),
        price: 2.45,
      })
      .set({ Authorization: `Bearer ${token}` });

    const get = await request(app)
      .get("/products")
      .query({ name: "Products STest" })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .put(`/products/${get.body[0].id}`)
      .send({
        categoryId: category.body.id,
        name: "Products STest 1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: true,
        expirationDate: new Date("2021-04-29"),
        price: 2.45,
      })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(400);
  });
});
