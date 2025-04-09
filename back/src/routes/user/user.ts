import { FastifyInstance } from 'fastify';

import { getUserHandler, deleteUserHandler } from './handlers';

import { mockedUsers } from '../../mocks/user';
import { METHODS } from '../../constants';

// All users
export const usersRoute = (fastify: FastifyInstance) => {
    fastify.get('/user', (_, reply) => {
        reply
            .code(200)
            .headers({ 'Content-Type': 'application/json' })
            .send({ users: mockedUsers });
    });
};

// Multiple for single user
export const userRoute = (fastify: FastifyInstance) => {
    fastify.route({
        method: ['GET', 'DELETE'],
        url: '/user/:id',
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                },
                required: ['id'],
            },
        },
        handler: (request, reply) => {
            const { id } = request.params as { id: number };
            switch (request.method) {
                // USER GET
                case METHODS.GET: {
                    const user = getUserHandler(id);
                    reply.send(user);
                    break;
                }
                // USER DELETE
                case METHODS.DELETE: {
                    const users = deleteUserHandler(id);
                    reply.send(users);
                    break;
                }
            }
        },
    });
};
