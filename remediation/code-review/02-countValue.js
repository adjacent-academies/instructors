/**
 * Given an array and a value, return the number of times that value is found
 * in the array.
 *
 * @example
 * countValue([1, 2, 3, 4, 5], 2); // => 1
 * countValue([1, 2, 3, 4, 5], 17); // => 0
 * countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 4
 * countValue([10, 10, 10, -10], 10); // => 3
 * countValue(['hello', bananas', 'hello'], 'hello'); // => 2
 * countValue(['hello', bananas', 'hello'], 'giraffe'); // => 0
 *
 * @param {object[]} array - An array
 * @param {object} - A value to count
 * @returns {number} The number of times the value appears in the array
 */
function countValue(array, value) {
  for(i=0;i<array.length;i++)
  {
    if(array[i] != value)
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
  console.log('Running sanity checks for countGreaterThan:');
  console.log(check(countValue([1,2,3,3,3,4],3),3));
  console.log(check(countValue([2,2,8,4],2),2));
  console.log(check(countValue([100,101,99,98,200], 100),1));
  console.log(check(countValue([3,3,3,3],3),4));
  console.log(check(countValue([3,3,3,3],7),0));
}

module.exports = countValue;
