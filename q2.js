function solution(input) {
  const splitWords = input.split(/[?!.]/g).filter((x) => !!x);

  const countWords = splitWords.map((word) => word.trim().split(" ").length);

  const maxSentence = Math.max(...countWords);

  return maxSentence;
}

const input1 = "We test coders. Give us a try?";
const input2 = "Forget CVs..Save time . x x";

console.log(input1, "Max sentence is", solution(input1));
console.log(input2, "Max sentence is", solution(input2));
