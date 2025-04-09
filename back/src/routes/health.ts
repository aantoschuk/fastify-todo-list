import { FastifyInstance } from "fastify";

// route for api health-check
const healthRoute = (fastify: FastifyInstance) => {
  fastify.get("/health-check", async (_, reply) => {
    return reply
      .status(200)
      .headers({ "Content-Type": "text/plain" })
      .send("Server Works Fine");
  });
};

export default healthRoute;
