
var randomId = require('random-id');

var len = 4;

//var pattern = 'aA0'
var pattern = '09'
 
var id = randomId(len, pattern)
console.log(id);
/*

const shortid = require('shortid');
 
//console.log(shortid.generate());
const { Generator } = require('randomly-id-generator');
const id = new Generator(DEFAULT);

id.length = 13; //the number of characters the id will have

id.custom = 'a b c'; //you can customize the characters putting on a string separeted with an empty character or on an array ["a", "b", "c"]

id.generate(); //generates the id with the characters "a", "b" and "c"

console.log(id);*/