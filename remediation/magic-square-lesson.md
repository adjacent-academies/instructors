# Magic Square Lesson

1. Describe what a magic square is
2. Explain the purpose of this exercise
3. Give some examples
4. Orientation
5. Scaffolding

## Loom Video

https://www.loom.com/share/3d23afd4fd3348e0ac6678f746b0216c

## Remediation Summary

These students were pushed outside their zone of proximal development. We need to move them back into their ZPD and get them practicing the right fundamental habits ASAP. In particular, they don't appear to have a solid handle in breaking down a problem and tackling it systematically / iteratively.

Rather than giving them all individual feedback, which would require a lot of time, duplicated efforts, and runs a good risk of making them feel like they totally failed, I'd emphasize the fact that what it tells me is we need practice in breaking down problems and expressing things in code.

I'd then present the below exercise to them (fleshed out, of course) and have them spend ~1hr working in pairs or small groups on the various iterations. I'd ask them to stop after each iteration and ask another pair for feedback.

## Magic Square

A magic square is an `N`-by-`N` grid of numbers where the numbers in each row, the numbers in each column, and the numbers along the two diagonals all add up to the same, single "magic number."

For example, here is a 3x3 magic square because every row, column, and the two diagonals all add up to 15:

```text
```

Here's a 4x4 magic square:

```text
```

The following are NOT magic squares:

```text
```

We're going to write a function that determines whether a square grid of numbers is a magic square.

## Assumptions

You can assume the following about the input:

1. The input will come in as an array of arrays
1. The input array will always have the same number of rows and columns (you don't need to check for that)
1. The numbers don't need to be distinct or consecutive

## Orientation

## Iterations

The main plan of attack is as follows:

1. Calculate the magic value, i.e., the number that all the rows and columns must add up to.
2. Write a function that tells us whether every row sums up to the magic value
3. Write a function that tells us whether every col sums up to the magic value
4. Write ... diagonals
5. Tie (1)-(5) above together to write a function that determines whether an arbitrary square grid of numbers is a magic square.

## v1 - Calculate the Magic Value

This iteration is already written for you. See [magic-square-scaffold.js](magic-square-scaffold.js).

## v2 - Determine If Rows Are Good

Write a function with the following signature:

```javascript
/**
 * Given as input a square grid of numbers and a magic value,
 * returns true if each row sums to the magic value and false otherwise.
 *
 * @param {number[][]} square A square grid of numbers
 * @param {number} magicValue The magic value to check the row sums against
 * @returns {boolean} true is every row sums to the magic value and false otherwise
 **/
function hasMagicRows(square, magicValue) {

}
```

Inside the `main` function, write some `console.log` statements with different inputs to make sure `hasMagicRows` is returning `true` when you expect it to return `true` and is returning `false` when you expect it to return `false`.

## v3 - Determine If Cols Are Good

As with `hasMagicRows`, write a function `hasMagicColumns` that takes the square grid and the magic value as input and returns `true` if every column sums to the magic value.

## v4 - Determine If Diagonals Are Good

As above, write a function `hasMagicDiagonals` that behaves like `hasMagicRows` and `hasMagicColumns` but instead checks the two diagonals. You might consider separating the logic for the left and right diagonal.

## v5 - Is It A Magic Square?

Combine the above together to complete `isMagicSquare`.
