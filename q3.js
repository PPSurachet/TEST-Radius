function solution(input, rotation) {
  const initInput = input;

  for (let index = 1; index <= rotation; index++) {
    const last = initInput.pop();
    initInput.unshift(last);
  }

  return initInput;
}

const input1 = [3, 8, 9, 7, 6];
const input2 = [6, 3, 8, 9, 7];
const input3 = [7, 6, 3, 8, 9];
const input4 = [0, 0, 0];
const input5 = [1, 2, 3, 4];

console.log(input1, "rotation", 3, "=>", solution([3, 8, 9, 7, 6], 3));

console.log(input1, "rotation", 1, "=>", solution([3, 8, 9, 7, 6], 1));

console.log(input2, "rotation", 1, "=>", solution([6, 3, 8, 9, 7], 1));
console.log(input3, "rotation", 1, "=>", solution([7, 6, 3, 8, 9], 1));

console.log(input4, "rotation", 1, "=>", solution([0, 0, 0], 1));

console.log(input5, "rotation", 4, "=>", solution([1, 2, 3, 4], 4));
