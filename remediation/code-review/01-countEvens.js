/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countEvens(array) {
  for(i=0;i<array.length;i++)
  {
    if(array[i]%2 != 0)
    {
      array.splice(i,1)
    }
  }
  return array.length;
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

  return true;
}
if (require.main === module) {
  console.log('Running sanity checks for countEvens:');
  console.log(check(countEvens([1,2,3,4]),2));
  console.log(check(countEvens([2,2,8,4]),2));
  console.log(check(countEvens([100]),1));
  console.log(check(countEvens([3,3,3,3]),0));

}

module.exports = countEvens;
