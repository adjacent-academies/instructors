/**
 * Given two arrays, returns a new array that is a concatenation of the
 * two given arrays.
 *
 * "Concatenation" means the two arrays are joined or glued together, end-to-end.
 *
 * JavaScript array's have a built-in concatenation method. Don't use it!
 * The goal is to better understand how concatenation works, not navigate
 * the JavaScript documentation.
 *
 * See https://en.wikipedia.org/wiki/Concatenation
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat([-10, undefined], [true, 'waffles']); // => [-10, undefined, true, 'waffles']
 * concat([], []); // => []
 * concat([20, 104], []); // => [20, 104]
 * concat([], ['hello', 'world']); // => ['hello', 'world']
 *
 * @param {object[]} leftArray - The left array to concatenate
 * @param {object[]} rightArray - The right array to concatenate
 * @returns {object[]} The concatenation of the two given arrays
 */

 let dimes = [10,10];
 let nickels = [5,5];
 let dimeNickel = ['10','10','5','5'];

// (The student will find some more issues with their concat function after further testing)
// (I would direct them to look up javascript array methods on MDN to see if they can get any
// ideas from seeing all the available tools)
// (If they're still stuck I will ask them to describe several solutions in pseudocode and
// we'll pick a working solution together)
// A potential answer: the student can loop through rightArray with ForEach and push each
// value onto the end of leftArray
function concat(leftArray, rightArray) {
  let left = leftArray.join(",");
  let right = rightArray.join(",");
  let together = "";
  together = left + "," + right;
  console.log(together);
  let concat = together.split(",");
  console.log(concat);
  return concat;
}

function check(output, expected)
{
  if (output.length !== expected.length){
    return false;
  }
  
  for (let i = 0; i < output.length; i++){
    if (output[i] !== expected[i]){
      return false;
    }
  }
  // When we sanity check our code we typically want to err on the side of caution.
  // Do you see an issue with returning true if none of the "return false" statements are triggered?
  return true;
}


/*function compare(leftArray, rightArray, correctArray)
{
  let match = false;
  let correct = correctArray;

  if(check(leftArray, rightArray) === correct)
  {
    match = true;
  }
  return match;
}*/


if (require.main === module) {
  // These sanity checks look great! Are there examples where the concat function doesn't work as expected?
  // When we perform sanity checks on our code we generally want to give it some tough cases
  // so we can find bugs sooners
  // Try testing your concat function on the examples given at the top of this file.
  // Do you see cases where your function doesn't return the same output?
  console.log(check(concat(['1','2'],['2','1']),['1','2','2','1']));
  console.log(check(concat(['2','2','3'],['2','1']),['2','2','3','2','1']));
}

module.exports = concat;
