const findPairs = require('./findPairs');

test('Find 3 number pairs whose sum is equal to 12 as in the task description', () => {
  expect( findPairs([ 1, 9, 5, 0, 20, -4, 12, 16, 7 ], 12) ).toStrictEqual( [ '5, 7', '0, 12', '-4, 16' ] );
});

test('Find 3 number pairs whose sum is equal to 12', () => {
  expect( findPairs([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 12) ).toStrictEqual( [ '3, 9', '4, 8', '5, 7' ] );
});

test('Do not find any number pairs whose sum is equal to 2', () => {
  expect( findPairs([ 1, 2, 3, 4 ], 2) ).toStrictEqual( [] );
});