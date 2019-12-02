// playing with recursion

// A recursive method is a method that calls itself (either directly or indirectly)

// There are three important rules of thumb in developing recursive programs:

// - The recursion has a base case.
// - Recursive calls must address subproblems that are smaller "in some way", so that recursive calls "converge to the base case".
// - Recursive calls should not address subproblems that overlap.

// src: http://algs4.cs.princeton.edu/11model/


// ----------------------
// features of recursion
// ----------------------


// ==================================================================
// ==================================================================
// to be recursive, a piece of code needs a method that calls itself
// ------------------------------------------------------------------

/*
function do_it(){
  console.log("hi")
  do_it()
}

do_it() // uncomment this line to run the function above.  sample output below ...
*/

// hi
// hi
// hi
// RangeError: Maximum call stack size exceeded

// as an aside ... it helps to see a little more of what's going on in there ...

/*
let counter = 0

function do_it(){
  console.log("hi", ++counter)
  // alternatively we can show the counter changing
  // console.log("hi", counter, "-->" ,  ++counter)
  do_it()
}

do_it()  // uncomment this line to run the function above.  sample output below ...
*/

// hi 1
// hi 2
// hi 3
// ...
// hi 12703
// hi 12704
// hi 12705
// RangeError: Maximum call stack size exceeded

// --------------------------------------------

// hi 0 --> 1
// hi 1 --> 2
// hi 2 --> 3
// ...
// hi 12696 --> 12697
// hi 12697 --> 12698
// hi 12698 --> 12699
// RangeError: Maximum call stack size exceeded

// ==================================================================
// ==================================================================
// to reach into the black box of recursive machinery, use parameters
// ------------------------------------------------------------------

/*
function do_it(counter){
  console.log("hi", counter, "-->" ,  ++counter)
  do_it(counter)
}

do_it(0) // uncomment this line to run the function above.  sample output below ...
*/

// hi 0 --> 1
// hi 1 --> 2
// hi 2 --> 3
// ...
// hi 8882 --> 8883
// hi 8883 --> 8884
// hi 8884 --> 8885
// hi 8885 --> 8886
// RangeError: Maximum call stack size exceeded

// ==================================================================
// ==================================================================
// use a base case to keep it stable. like a "kicker" from Inception
// ------------------------------------------------------------------

/*
function do_it(counter){
  console.log("hi", counter, "-->" ,  ++counter)
  if (counter > 3) return
  do_it(counter)
}

do_it(0) // uncomment this line to run the function above.  sample output below ...
*/

// hi 0 --> 1
// hi 1 --> 2
// hi 2 --> 3
// hi 3 --> 4

// ==================================================================
// ==================================================================
// on the way down, on the way up: there are 2 sides to recursion
// ------------------------------------------------------------------

/*
function do_it(counter){
  console.log(`on the way down at level ${++counter}`)

  if (counter > 2) return

  // on the way down is everything above this line
  do_it(counter)
  // on the way up is everything below this line

  console.log(`on the way up at level ${counter}`)
}

do_it(0) // uncomment this line to run the function above.  sample output below ...
*/

// on the way down at level 1
// on the way down at level 2
// on the way down at level 3
// on the way down at level 4
// on the way up at level 3
// on the way up at level 2
// on the way up at level 1

// ==================================================================
// ==================================================================
// each recursive level keeps its own state that you can find later
// ------------------------------------------------------------------

/*
function do_it(counter){
  let x = Math.round(Math.random() * 100)
  console.log(`the value of x at level ${++counter} is [ ${x} ]`);

  if (counter > 3) return
  do_it(counter)

  console.log(`the value of x at level ${counter} is [ ${x} ]`);
}

do_it(0) // uncomment this line to run the function above.  sample output below ...
*/

// the value of x at level 0 is [ 43 ]
// the value of x at level 1 is [ 98 ]
// the value of x at level 2 is [ 40 ]
// the value of x at level 3 is [ 99 ]
// the value of x at level 2 is [ 40 ]
// the value of x at level 1 is [ 98 ]
// the value of x at level 0 is [ 43 ]

// ==================================================================
// ==================================================================
// ==================================================================
// ------------------------------------------------------------------
// that's all.  if that last one was a little confusing, watch this:
// https://www.dropbox.com/s/jglwmt5ticim3k5/2014-01-30%2011.13.36.mov
// ------------------------------------------------------------------


// you can expand a ecursive machines to think about them more easily

// on the way down at level 1
// on the way down at level 2
// on the way down at level 3
// on the way down at level 4
// on the way up at level 3
// on the way up at level 2
// on the way up at level 1

// function do_it(0) <--- this 0 is what "comes in the door"
//   console.log("on the way down at level 1")

//   do_it(1)
//     console.log("on the way down at level 2")

//     do_it(2)
//       console.log("on the way down at level 3")

//       do_it(3)
//         console.log("on the way down at level 4")

//         return if counter >= 3   <--- here's the "kicker" we talked about, the "base case"

//       console.log("on the way up at level 3")
//     console.log("on the way up at level 2")
//   console.log("on the way up at level 1")
// end


// you can keep the return value of the function call
// -----------------------------------------------------------------

/*
function do_it(counter){
  console.log(`on the way down at level ${++counter}`)

  if (counter > 3) return counter

  counter = do_it(counter) // we can capture the return of the function
                           // and use it for some purpose here

  console.log(`on the way up at level ${--counter}`)
  // return counter // but the lines above now expect a return, otherwise counter is undefined
}

do_it(0) // uncomment this line to run the function above.  sample output below ...
*/

// on the way down at level 1
// on the way down at level 2
// on the way down at level 3
// on the way down at level 4
// on the way up at level 3
// on the way up at level 2
// on the way up at level 1

// ..................................................................
