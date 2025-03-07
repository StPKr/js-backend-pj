import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` }); //*if no prod environment is set goes to dev by default

export const { PORT, NODE_EVN } = process.env;