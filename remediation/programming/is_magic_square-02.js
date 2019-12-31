/**
  Returns whether the supplied nested list is a magic square

  @param square a nested list of integers, with the same number of rows as
                columns
  @returns True if and only if 'square' is magic, and False otherwise.
 */
function is_magic_square(word) {

  // --- MM ---
  // Not having other information about the student, I'd probably spend some time making sure they can implement the "reducer"
  // function without ES6 syntax or at least explain it to me. Given the fact that the test suite doesn't run as is
  // indicates some of this stuff might just be thrown against the wall to see what sticks. They seem to have tried to apply a 
  // "divide and conquer" approach but the implementation has fallen flat. 

  // Given the obvious issues with scoping, function declaration, and execution here (there are some fundamental issues to address), 
  // it's probably not worth asking why the "reducer" variable is declared outside of "row_sum_cal" given it's not used anywhere else.
  // My hunch is they kind of get what reducer is doing, but I'd be curious if they can implement row_sum_cal without it.
  // --- MM ---

  // This code is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.
  // I intended to use it as a way to get the sum of the row
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const reducer = function(accumulator, currentValue) {
    return accumulator + currentValue
  }

  // --- MM ---
  // Before trying to fix things, I'd like to know what the student is trying to do with the function parameters. Why do they have 
  // parameters in this function (maybe just a typo, copy paste from is_magic_square) but not col_sum_calc or diagonal_sum? 
  // Do they understand why attempting to access elements in "word" is making their test suite fail?
  // --- MM ---

  // Calculate the Sum of the row
  function row_sum_cal() {
    let row_sum = [];
    for (let i = 0; i < word.length; i++) {
      console.log(word)
      let row = word[i].reduce(reducer);
      row_sum.push(row);
    }
  }

  // --- MM ---
  // Given all the other incorrect syntax that's in this submission, I'd dig deeper into this code. How well does the student
  // understand what's going on? Are they really grasping how the code is iterating through a nested structure or did they
  // get this from an example online? If they get it, let's dig deeper and figure out what they're not getting. Maybe they
  // just panicked and couldn't code under pressure.
  // --- MM ---

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

  // --- MM ---
  // I'd make a note on the importance of incorrect indentation here (worth emphasizing at any level of understanding).
  // As stated below the student might understand that a magic square is one where all the rows have the same sum,
  // all the columns have the same sum, and the diagonal has the same sum as the rows and columns. I'd need to get a better sense
  // of why the solution they seemed to target had to do with creating new arrays and comparing those results. It's a novel approach
  // and I'd give them credit for trying to find a unique solution to the problem, but I'd also want to make sure they knew
  // what they were trying to do.
  // --- MM ---

  // Calculate the sum of the Diagonal
   let diagonal_sum = [];
   for (let i = 0; i < word.length; i++) {
     for (let j = 1; j < word[i].length; j++) {
      diagonal = word[j+1][i];
      diagonal_sum.push(diagonal)
   }
 }
 // --- MM ---
 // I'd probably ask how they might verify the data that's part of this evaluation. They seem to understand that in order
 // to calculate the return value, it's the boolean result of comparing the results of row_sum_cal, col_sum_calc, and diagonal_sum (do they get why 
 // row_sum and column_sum will never be defined?)
 // 
 // They might just not be grasping JS syntax? Do they understand why there's a return here? Do they understand why they need a
 // return statement in the functions they wrote for things to work similarly? Maybe they have an understanding of what needs to happen
 // but are just freaking out when they're told to code to a spec. 
 // 
 // Given how things are failing, I'd probably start over start with the return statement and work backwards to create
 // the code. If I discover the student seems to understand how to complete the problem, but not necessarily how to 
 // translate that into code (or maybe it's all syntax), then it's probably an opportunity to pair program and alternate 
 // driver/navigator roles for each helper function.
 // --- MM ---


 return (row_sum === column_sum === diagonal_sum)
 return (true === true === true)
}

// --- MM ---
// I'd speak to them a little bit about this. What was their intention here? To have some runner code? How did they expect to see 
// a result for this (are they aware that just because an evaluation happens doesn't mean it will be output for them to see?)? 
// --- MM ---

is_magic_square([
  [9, 6, 3, 16],
  [4, 15, 10, 5],
  [14, 1, 8, 11],
  [7, 12, 13, 2]
]);
module.exports = is_magic_square;
