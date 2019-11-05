'use strict';

const services = require('./services.js');

module.exports = routes;
module.exports.autoPrefix = '/microservice2';

let FASTIFY = {};
async function routes (fastify, options) {
  services.FASTIFY = FASTIFY = fastify;

  fastify.get('/', anotherTest);
}

const anotherTest = async (request, reply) => {
  return services.anotherTest();
};
