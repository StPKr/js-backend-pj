import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` }); //*if no prod environment is set goes to dev by default

export const {
    PORT, SERVER_URL,
    NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    EMAIL_PASSWORD,
} = process.env;