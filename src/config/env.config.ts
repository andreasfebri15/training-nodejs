import "dotenv/config";

const env = {
  API_KEY: process.env.API_KEY,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN || "",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN || "",
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || "",
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || "",
};
export default env;
