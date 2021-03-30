import { hash } from "bcrypt";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@Shared/infra/http/app";

let connection: Connection;

describe("List Categories Controller", () => {
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

  it("Should be able to list all categoriess", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category STest get",
        description: "Category STest",
      })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .get("/categories")
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category STest get");
  });

  it("Should be able to list all categories by id", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    const createCategory = await request(app)
      .post("/categories")
      .send({
        name: "Category STest get 2",
        description: "Category STest 2",
      })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .get("/categories")
      .query({ id: createCategory.body.id })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category STest get 2");
  });

  it("Should be able to list all categories by name", async () => {
    const responseToken = await request(app)
      .post("/login")
      .send({ email: "admin@dynamox.net", password: "admin" });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category STest",
        description: "Category STest 3",
      })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .get("/categories")
      .query({ name: "Category STest" })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category STest");
  });
});
