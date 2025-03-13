import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` }); //*if no prod environment is set goes to dev by default

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
} = process.env;