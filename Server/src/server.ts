import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 8082,
  })
  .then(() => console.log("💻 Server Iniciado 💻"))
  .catch((error) => console.log("🔥 Ocorreu algum erro 🔥\n", error));
