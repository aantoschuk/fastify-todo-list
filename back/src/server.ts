import Fastify from "fastify";

import { healthRoute } from "./routes/health";
import { usersRoute, userRoute } from "./routes/user";

const fastify = Fastify({ logger: true });

// TODO: make it dynamic and check for env availability
fastify.register(healthRoute);
fastify.register(userRoute);
fastify.register(usersRoute);

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
