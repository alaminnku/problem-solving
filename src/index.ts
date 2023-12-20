function removeDuplicates(numbers: number[]): number {
  if (numbers.length <= 2) return numbers.length;

  let k = 2;
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] !== numbers[k - 1] || numbers[i] !== numbers[k - 2]) {
      numbers[k] = numbers[i];
      k++;
    }
  }
  return k;
}
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
