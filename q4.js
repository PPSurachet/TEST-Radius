function solution(input) {
  let arrFilter = [...input];
  let unpairedElement;

  for (let index = 0; index < input.length; index++) {
    arrFilter = arrFilter.slice(1);

    const isPair = arrFilter.findIndex((x) => x === input[index]);

    arrFilter = arrFilter.filter((number, i) => i !== isPair);

    if (arrFilter.length === 1) {
      unpairedElement = arrFilter[0];
      break;
    }
  }

  return unpairedElement;
}

const input = [9, 3, 9, 3, 9, 7, 9];

console.log(input, "unpaired is", solution(input));
