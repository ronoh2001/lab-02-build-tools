'use strict';

var main = require(__dirname + '/../index');
const assert = require('assert');

describe('testing module index', function(){
  describe('testing main function', function(){
    it('process.argv[2] = should return "hello Ron Oh"', function(){
      assert.equal(main(), 'hello Ron Oh');

    });
  });
});
// use strict';
//
// const greet = require(__dirname + '/../index.js');
// const assert = require('assert');
//
// describe('testing module lab-ron/greet.js', function(){
//   describe('testing function greet()', function(){
//     it('should return hello + name', function(){
//       assert.equal(greet(), 'hello Ron Oh');
//       // assert.equal(greet('Yunjoo'), 'hello Yunjoo');
//     });
//   });
// });
