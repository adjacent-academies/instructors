const fs = require("fs");

const [n, x, ...args] = process.argv;
if(!args) {
  throw new Error(`Please supply a file to test using [npm run test -- FILENAME]`)
}


const id = args.pop();
const code = `${__dirname}/../programming`

if (!fs.existsSync(`${code}/is_magic_square-${id}.js`)) {
    throw new Error(`The file [is_magic_square-${id}.js] was not found for testing.`);
}

const is_magic_square = require(`${code}/is_magic_square-${id}.js`);


// Unit tests for Problem 3 from the Final, CSC 121.
// Author: Raghuram Ramanujan
describe("Magic Square", function() {
    test("t1. produces no extraneous output", function() {
        const spy = jest.spyOn(global.console, "log");

        // prettier-ignore
        const input = [
                    [2, 7, 6],
                    [9, 5, 1],
                    [4, 3, 8]
                  ];

        is_magic_square(input);

        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
    });

    test("t2. is_magic_square on 3x3 magic square", function() {
        // prettier-ignore
        const input = [
                    [2, 7, 6],
                    [9, 5, 1],
                    [4, 3, 8]
                  ];

        expect(is_magic_square(input)).toBeTruthy();
    });

    test("t3. is_magic_square on 3x3 square with incorrect row sum", function() {
        // prettier-ignore
        const input = [
                    [2, 7, 6],
                    [9, 5, 1],
                    [4, 3, 9]
                  ];

        expect(is_magic_square(input)).toBeFalsy();
    });

    test("t4. is_magic_square on 4x4 magic square", function() {
        // prettier-ignore
        const input = [
                    [9, 6, 3, 16],
                    [4, 15, 10, 5],
                    [14, 1, 8, 11],
                    [7, 12, 13, 2]
                  ];

        expect(is_magic_square(input)).toBeTruthy();
    });

    test("t5. is_magic_square on 4x4 square with incorrect column sum", function() {
        // prettier-ignore
        const input = [
                    [9, 6, 3, 16],
                    [4, 15, 10, 5],
                    [14, 1, 8, 11],
                    [7, 13, 12, 2]
                  ];

        expect(is_magic_square(input)).toBeFalsy();
    });

    test("t6. is_magic_square on 6x6 magic square", function() {
        // prettier-ignore
        const input = [
                    [1, 35, 34, 3, 32, 6],
                    [30, 8, 28, 27, 11, 7],
                    [24, 23, 15, 16, 14, 19],
                    [13, 17, 21, 22, 20, 18],
                    [12, 26, 9, 10, 29, 25],
                    [31, 2, 4, 33, 5, 36]
                  ];

        expect(is_magic_square(input)).toBeTruthy();
    });

    test("t7. is_magic_square on left diagonal computation", function() {
        // prettier-ignore
        const input = [
                    [0, 1, 1],
                    [1, 0, 1],
                    [1, 1, 0]
                  ];

        expect(is_magic_square(input)).toBeFalsy();
    });

    test("t8. is_magic_square on right diagonal computation", function() {
        // prettier-ignore
        const input = [
                    [1, 1, 0],
                    [1, 0, 1],
                    [0, 1, 1]
                  ];

        expect(is_magic_square(input)).toBeFalsy();
    });
});
