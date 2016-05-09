'use strict';

const greet = require(__dirname + '/../lib/greetings');
const assert = require('assert');

describe('testing module greetings', function(){
  describe('testing function', function(){
    it('should return the greeting + the argument "Ron"', function(){
      process.argv[2] = 'Ron';
      assert.equal(greet(process.argv[2]), 'hello Ron');
      // assert.equal(greet('Yunjoo'), 'hello Yunjoo');
    });
  });
});
