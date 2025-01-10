import { db } from "./prisma";

export const connectToDatabase = async () => {
  try {
    await db.$connect();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};
