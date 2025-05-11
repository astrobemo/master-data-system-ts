import { PrismaClient } from "@prisma/client";
import { log } from "console";
import dotenv from "dotenv";

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV || "development";
const logLevel = ENVIRONMENT === "development" ? ["error","info","warn","error"] : ["error","warn","error"];
function connect() : PrismaClient {
    if (!process.env.DB_URL) {
        throw new Error("DB_URL is not defined in .env file");
    }
    
    return new PrismaClient({
        datasource: {
            url: process.env.DB_URL,
        },
        errorFormat: "pretty",
        log: logLevel
    });
}

const gracefulShutdown = async (): Promise<void> => {
    await client.$disconnect();
    log("Prisma Client disconnected");
}

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("beforeExit", gracefulShutdown);

const client : PrismaClient = connect();

export {client}