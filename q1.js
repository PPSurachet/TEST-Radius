function solution(input) {
  const numberInput = Number(input.join(""));

  const plusNumberInput = numberInput + 1;

  const convertToArray = plusNumberInput
    .toString()
    .split("")
    .map((x) => Number(x));

  return convertToArray;
}

const input1 = [2, 3, 3];
const input2 = [9, 9, 9];

console.log(input1, "=>", solution(input1));
console.log(input2, "=>", solution(input2));
