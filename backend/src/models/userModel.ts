import pool from "../db/dbPool.js";
import type { UserRegisterInput } from "../types/user.type.js";
import type { DbUpdateResponse } from "../types/db.type.js";
import { DatabaseError } from "pg";

const insertNewUser = async ({ username, email, displayName, password }: UserRegisterInput): Promise<DbUpdateResponse> => {
  try {
    const SQL_CMD = `
      INSERT INTO user_account(username, email, display_name, password, role_id)
      VALUES($1, $2, $3, $4, $5)
    `;
    const VALUES = [username, email, displayName, password, 1];

    const queryRes = await pool.query(SQL_CMD, VALUES);

    if (queryRes.rowCount == 1) {
      return {
        success: true,
        code: "SUCCESS_USER_REGISTER"
      }
    } else {
      return {
        success: false,
        code: "ERR_USER_REGISTER_UNKNOWN"
      }
    }
  } catch (error) {
    if (error instanceof DatabaseError && error.code == "23505") {
      return {
        success: false,
        code: "ERR_USER_REGISTER_DUPLICATE"
      }
    } else {
      return {
        success: false,
        code: "ERR_USER_REGISTER_UNKNOWN"
      }
    }
  }
}

export default {
  insertNewUser
}
