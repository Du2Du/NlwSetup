import fastify from "fastify";
import cors from "@fastify/cors";
const app = fastify();

app.register(cors);

app
  .listen({
    port: 8082,
  })
  .then(() => console.log("💻 Server Rodando 💻"))
  .catch((error) => console.log("🔥 Ocorreu algum erro 🔥\n", error));
