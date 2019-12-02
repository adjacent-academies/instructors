/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */
function is_magic_square(word) {
  // This code is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.
  // I intended to use it as a way to get the sum of the row
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // Calculate the Sum of the row
  function row_sum_cal(word) {
    let row_sum = [];
    for (let i = 0; i < word.length; i++) {
      let row = word[i].reduce(reducer);
      row_sum.push(row);
    }
  }
  // Calculate the sum of the column
  function col_sum_calc() {
    let column_sum = [];
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < word[i].length; j++) {
        column = word[j][i];
        column_sum.push(column);
      }
    }
  }
 // Calculate the sum of the Diagonal
   let diagonal_sum = [];
   for (let i = 0; i < word.length; i++) {
     for (let j = 1; j < word[i].length; j++) {
      diagonal = word[j+1][i];
      diagonal_sum.push(diagonal)
   }
 }
 return (row_sum === column_sum === diagonal_sum)
}

is_magic_square([
  [9, 6, 3, 16],
  [4, 15, 10, 5],
  [14, 1, 8, 11],
  [7, 12, 13, 2]
]);
module.exports = is_magic_square;
