/**
 * Design an interface that abstracts iteration over a collection of values. 
 * An object that provides this interface represents a sequence, and the interface 
 * must somehow make it possible for code that uses such an object to iterate over 
 * the sequence, looking at the element values it is made up of and having some way 
 * to find out when the end of the sequence is reached.
 * 
 * When you have specified your interface, try to write a function logFive that takes 
 * a sequence object and calls console.log on its first five elements—or fewer, if the 
 * sequence has fewer than five elements.
 * 
 * Then implement an object type ArraySeq that wraps an array and allows iteration over 
 * the array using the interface you designed. Implement another object type RangeSeq 
 * that iterates over a range of integers (taking from and to arguments to its constructor) instead.
 */

// Your code here.
var Sequences = require('./sequenceInterface');
var ArraySeq = Sequences.ArraySeq;
var RangeSeq = Sequences.RangeSeq;

function logFive(sequence) {
  var length = (sequence.length < 5)? sequence.length : 5;
  for(var i = 0; i < length; i += 1) {
    console.log(sequence.next());
  }
}

logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1,2,3,4,5,6,7,7]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104