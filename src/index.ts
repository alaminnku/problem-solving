function mergeSortedArrays(param1: number[], param2: number[]) {
  const mergedArray: number[] = [];

  let param1Index = 0;
  let param1Item = param1[param1Index];

  let param2Index = 0;
  let param2Item = param2[param2Index];

  // Check input
  if (param1.length === 0) return param2;
  if (param2.length === 0) return param1;

  while (param1Item || param2Item) {
    if (!param2Item || param1Item < param2Item) {
      mergedArray.push(param1Item);
      param1Item = param1[param1Index + 1];
      param1Index++;
    } else {
      mergedArray.push(param2Item);
      param2Item = param2[param2Index + 1];
      param2Index++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1, 2, 3, 5, 31], [4, 6, 9, 30]));
