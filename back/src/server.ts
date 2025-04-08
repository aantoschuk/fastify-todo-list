import Fastify from "fastify";

const fastify = Fastify({ logger: true });

const start = async () => {
  try {
    // listen to all Ipv4 interfaces
    await fastify.listen({ port: 8000, host: "0.0.0.0" });
  } catch (error) {
    // display  an error and gracefully exit
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
