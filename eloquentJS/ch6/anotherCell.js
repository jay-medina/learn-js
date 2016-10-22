/**
 * Implement a cell type named StretchCell(inner, width, height) 
 * that conforms to the table cell interface. 
 * It should wrap another cell (like UnderlinedCell does) and ensure that the 
 * resulting cell has at least the given width and height, even if the inner 
 * cell would naturally be smaller.
 */

/**
 * Table Cell interface: 
 *  This is the interface:

 minHeight() returns a number indicating the minimum height this cell requires (in lines).

 minWidth() returns a number indicating this cell’s minimum width (in characters).

 draw(width, height) returns an array of length height, which contains a 
                     series of strings that are each width characters wide. 
                     This represents the content of the cell.
 */

var TextCell = require('./textCell');
var repeat = require('./repeat');

function StretchCell(inner, width, height) {
  this.width = width;
  this.height = height;
  this.inner = inner;
}
StretchCell.prototype.minHeight = function () {
  return Math.max(this.height, this.inner.minHeight());
};


StretchCell.prototype.minWidth = function () {
  return Math.max(this.width, this.inner.minWidth());
};


StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat(" ", width)]);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth(), 3);
// → 3
console.log(sc.minHeight(), 2);
// → 2
console.log(sc.draw(3, 2), ['abc', '   ']);
// → ["abc", "   "]