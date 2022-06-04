
// Environment variables
import { config } from "dotenv";
// Configuration the .env file
config()




export default {

    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 4000,
    SECRET: process.env.SECRET_API,
    HOST: process.env.APP_HOST,
}