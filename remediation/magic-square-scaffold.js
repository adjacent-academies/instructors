function sum(list) {
  return list.reduce((x, y) => x + y);
}

function getMagicValue(square) {
  return sum(square[0]);
}

function isMagicSquare(square) {

}

function main() {
  let square3 = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];

  console.log("3x3 magic value is 15", getMagicValue(square3) === 15);
}

if (require.main === module) {
  main();
}

module.exports = isMagicSquare;
