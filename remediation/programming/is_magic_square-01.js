/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */
function is_magic_square(square) {
  // loop through the first row and add it all together, call this sum
  // check to see if the sum is 15
  // if it is not 15 return false
  // reset the sum back to 0
  // loop through the rest of the rows and do the same
  // loop through the first column and add it all together
  // check to see if the sum is 15
  // if it's not 15 return false
  // reset the sum back to 0
  // loop through the rest of the columns and do the same process
  // get the first number of the first row, the second number from the second row, and
  // the third number from the third row
  // add all those together
  // check to see if the sum equals 15, if not return false
  // do the same process but with the first and second parameters switched
  // i.e. first number from third row, second number from second row, third number from the first row
  // check to see if the sum equals 15 and if not return false
  let sum = 0;
  let size = square.length;
  for(let i = 0; i < size; i++) {
    //console.log(square[i]);
    for(let j = 0; j < size; j++) {
      sum += square[j][i];
        if (sum === size) {
          sum = 0;
        }
      return sum != size
    }

    }
    return size === sum;
  }
  //true or false if all of the sums equal each other;


module.exports = is_magic_square;

//function Sum ()%
