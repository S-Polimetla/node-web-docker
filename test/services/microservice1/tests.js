'use strict';

const app = require('../../../services/microservice1/services.js');
const chai = require('chai');
const expect = chai.expect;

describe('Testing Microservice 1', function () {
  it('verifies valid microservice-1 response', async () => {
    const result = app.test();
    expect(result).to.be.an('object');
    expect(result).to.be.deep.eq({ name: 'test' });
  });
});
