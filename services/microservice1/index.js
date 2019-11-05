'use strict';

const services = require('./services.js');

module.exports = routes;
module.exports.autoPrefix = '/microservice1';

let FASTIFY = {};
async function routes (fastify, options) {
  services.FASTIFY = FASTIFY = fastify;

  fastify.get('/', test);
}

const test = async (request, reply) => {
  return services.test();
};
