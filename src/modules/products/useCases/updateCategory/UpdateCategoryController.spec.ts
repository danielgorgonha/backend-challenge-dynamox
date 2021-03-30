import { hash } from "bcrypt";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@Shared/infra/http/app";

let connection: Connection;

describe("Update Category Controller", () => {
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

  it("Should be able to update a category", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category STest Store",
        description: "Category STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    const get = await request(app)
      .get("/categories")
      .query({ name: "Category STest Store" })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .put(`/categories/${get.body[0].id}`)
      .send({
        name: "Category STest Store 1",
        description: "Category STest 1",
      })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
  });

  it("Should not be able to update a category already exists", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category STest Store 1",
        description: "Category STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    await request(app)
      .post("/categories")
      .send({
        name: "Category STest Store 2",
        description: "Category STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    const get = await request(app)
      .get("/categories")
      .query({ name: "Category STest Store 2" })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .put(`/categories/${get.body[0].id}`)
      .send({
        name: "Category STest Store 1",
        description: "Category STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(400);
  });
});
