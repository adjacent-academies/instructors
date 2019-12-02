/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */
function is_magic_square(input) {
  let sum = [];
  for (let i = 0; i < input.length; i++) {
    //console.log(input[i])
    // prettier-ignore
    sum.push(input[i].reduce((accumulator, currentValue) => accumulator + currentValue));
  }

  let rowsPass = sum.every((val, i, arr) => val === arr[0])
  if(!rowsPass) return false
  else {
    columns()
  }
}

function columns(input) {
 // here, I would loop through the items in input (called them rows), then rows[i] to add all the row[0]s row[1]s row[2]s and so forth togther
 // then I would use the same if statement from the previous function (.ever()) to check if they are all equal.
 // if they are, then a new function for diagonals is called
}

function diagonals(input) {
  // I would loop through input and rows like above, but I then push row[i--] and row[++] as I looped through the rows to get the two diagonals
  // I would have two arrays, one for each diagonal
  //then I would use the same logic as the previous two functions to sum them
  // if they pass, then I return true, if false, then I return false
}

module.exports = is_magic_square;
