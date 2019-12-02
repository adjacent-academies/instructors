/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */

// Psuedocode
/*
// calculate magic number, call it "magic"

// prepare to save the totals for all rows, call it "rowTotals"

  //for each of the rows of the square
   // sum numbers in the row, call it "rowSum"
    //push rowSum on to rowTotals

  //repeat the same process for columns, save as "colTotals"

  //repeat the same process for diagonals, save as "diagTotals"

  //compare all elements of rowTotals to "magic"
  //compare all elements of colTotals to "magic"
  //compare all elements of diagTotals to "magic"
  // look at numbers as rows(width)/columns (height)
// assume if h and w are magic squares the diagonal does NOT implicitly work
// create two loops, one representing height, the other nested and representing width
// create a counter variable that records how much each row and column has

  */

// create a function that returns a nested list of integers
function is_magic_square(square) {
  // variable counters
  let columnTotal = 0;
  let rowTotal = 0;
  let diagTotal = 0;
  console.log(square);
  // loop through the rows
  for (let row = 0; row < square.length; row++) {
    // add the result to the row counter
    rowTotal++;
    let currentRow = square[row];

    const rowSum = arr => arr.reduce((a, b) => a + b, 0);
    let sum = rowSum(currentRow);
    console.log(row, currentRow, sum);

    // // loop through the columns
    // for (let column = 0; column.length < square; column++) {

    // }

    // // add the result to the column counter
    // columnCount++;

    // // check diagonals
    // for (let diagonal = 0; diagonal < square.length; diagonal++) {}
    // diagCount++;

    // if (rowCount === columnCount) {
    // } else {
    // }
    // console.log("line 24", rowCount, columnCount, diagCount);
    // //   }

    // //   // if the rowCount and columnCount are equal it returns true
    // //   if (rowCount === columnCount) {
    // //     return true;

    // //     // if not equal, it returns false
    // //   } else {
    // //     return false;
    // //   }
    // // }
  }
  // return true;
}
