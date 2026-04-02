import { describe, test, expect } from "vitest";
import connectionPool from "../db/dbPool.js";

describe("Database connection pool test", () => {
  test("should be success on selecting 1", async () => {
    const res = await connectionPool.query("SELECT 1 AS value");
    
    expect(res.rows[0].value).toEqual(1);
  });
});
