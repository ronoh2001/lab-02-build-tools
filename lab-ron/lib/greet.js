'use strict';

// function cmd() {
  // const name = process.argv[2] || 'Ron Oh';
  // console.log(name);
  // return 'hello ' + name;
// }

function greet(name){
  const blank = name || 'Ron Oh';
  return 'hello ' + blank;
}
// cmd();
greet();
// exports.cmd = cmd;
exports.greet = greet;
