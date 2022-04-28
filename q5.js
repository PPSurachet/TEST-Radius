function isArraySorted(array) {
  let isArrayIsSorted = false;

  for (let index = 1; index < array.length; index++) {
    //* case if first index array do not check anything
    const isMoreThan = array[index] - array[index - 1] >= 0 ? true : false;

    //? check if number less than
    if (isMoreThan) {
      isArrayIsSorted = true;
    } else {
      isArrayIsSorted = false;
      break;
    }
  }

  return isArrayIsSorted;
}

function solution(input) {
  let swapTimes = 0;
  for (let index = 1; index < input.length; index++) {
    if (input[index] > input[index - 1]) {
      const maxNumber = Math.max(...input);

      const indexMaxNumber = input.findIndex((x) => x === maxNumber);

      //! find max number and check current index is less than max number
      //! if less than replace index max number - 1 with current index
      if (input[index] < maxNumber) {
        const currentValueIndex = input[index];
        input[index] = input[indexMaxNumber - 1];
        input[indexMaxNumber - 1] = currentValueIndex;

        swapTimes++;

        if (swapTimes >= 2) return false;

        if (isArraySorted(input)) return true;
      }
    }
  }
}

const input1 = [1, 5, 3, 3, 7];
const input2 = [1, 3, 5, 3, 4];
const input3 = [1, 3, 5];

console.log(input1, solution(input1));
console.log(input2, solution(input2));
console.log(input3, solution(input3));

//! [1, 5, 3, 3, 7]
//! [1, 3, 3, 5, 7]
//! return true

//! [1, 3, 5, 3, 4]
//! [1, 3, 4, 3, 5]
//! [1, 3, 3, 4, 5]
//! return false
