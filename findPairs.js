const findPairs = (arr, sum) => {

  let result = [];

  for( let i = 0; i < arr.length; i++ ) {
    for ( let j = i + 1; j < arr.length; j++) {
      arr[i] + arr[j] === sum ? result.push(`${arr[i]}, ${arr[j]}`) : null;
    }
  }

  return result;
}

module.exports = findPairs;