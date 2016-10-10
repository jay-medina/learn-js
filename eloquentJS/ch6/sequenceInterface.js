/**
 * Design an interface that abstracts iteration over a collection of values. 
 * An object that provides this interface represents a sequence, and the 
 * interface must somehow make it possible for code that uses such an object to 
 * iterate over the sequence, looking at the element values it is made up of and 
 * having some way to find out when the end of the sequence is reached.
 * 
 * When you have specified your interface, try to write a function logFive that takes a 
 * sequence object and calls console.log on its first five elements—or fewer, if the sequence 
 * has fewer than five elements.
 * 
 * Then implement an object type ArraySeq that wraps an array and allows iteration over the 
 * array using the interface you designed. Implement another object type RangeSeq that iterates over 
 * a range of integers (taking from and to arguments to its constructor) instead.
 */
function Sequence(items) {
  this.length = 0;
  this._iter = 0;
  this._items = items;
}

Sequence.prototype.next = function() {}

function ArraySeq(arr) {
  Sequence.call(this, arr);
  this.length = arr.length;
}

ArraySeq.prototype = Object.create(Sequence.prototype);

ArraySeq.prototype.constructor = ArraySeq;

ArraySeq.prototype.next = function() {
  if(this._iter > this.length) {
    this._iter = 0;
    return undefined;
  }
  var n = this._iter;
  this._iter += 1;
  return this._items[n];
};

function RangeSeq(low, high) {
  Sequence.call(this);
  this.length = high - low + 1;
  this._high = high;
  this._low = low;
  this._iter = low;
}

RangeSeq.prototype = Object.create(Sequence.prototype);

RangeSeq.prototype.constructor = RangeSeq;

RangeSeq.prototype.next = function() {
  if(this._iter > this._high) {
    this._iter = this._low;
    return undefined;
  }

  var n = this._iter;
  this._iter += 1;
  return n;
};

module.exports = {
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq
}