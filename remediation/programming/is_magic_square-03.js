/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */
let sum2 = 0;
let sum = 0;
function is_magic_square(square) {
  //this function will call column, row, and diagonal sum and check if they are equal
  console.log(row_sum(square), column_sum(square));
}

function row_sum(square) {
  for (let i = 0; i < square.length; i++) {
    sum = square[i];
    let x = sum.reduce((a, b) => {
      return a + b;
    });
    return x; //need to loop through each row and make sure each is equal
  }
}
function column_sum(square) {
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square.length; j++) {
      sum2 += square[j][i];
    }
  }
  return sum2; //need to return one column at a time and identify if they are equal
}
function diagonal_sum(square) {
  //similar structure to previous two functions, but the row and column must
  //increment together to sum the diagonal numbers
}
module.exports = is_magic_square;
