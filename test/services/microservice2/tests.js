'use strict';

const app = require('../../../services/microservice2/services.js');
const chai = require('chai');
const expect = chai.expect;

describe('Testing Microservice 2', function () {
  it('verifies valid microservice 2 response', async () => {
    const result = app.anotherTest();
    expect(result).to.be.an('object');
    expect(result).to.be.deep.eq({ name: 'anotherTest' });
  });
});
