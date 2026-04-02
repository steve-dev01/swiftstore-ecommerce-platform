import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("GET /swiftshop", () => {
  test("should return default greeting JSON", async () => {
    const res = await request(app).get("/swiftstore");

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: "Hello from swiftstore API." });
  });
});