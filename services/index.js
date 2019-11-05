'use strict';

module.exports = routes;

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.code(200).send();
  });
};
