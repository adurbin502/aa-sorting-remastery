const arr1 = [23, 12, 43, 5, 121, 56, 4];
const arr2 = [231, 143, 653, -32, 44, 497, 6];

function insertSort(arr) {
  // 1. If it is the first element, it is already sorted; return 1.
  // 2. Pick next element.
  // 3. Compare with all elements in the sorted sub-list.
  // 4. Shift all the elements in the sorted sub-list that is greater than the value
  //   to be sorted.
  // 5. Insert the value.
  // 6. Repeat until list is sorted.
  
  let copy = [...arr];
  let sorted = [];

  while (copy.length) {
    console.log(sorted.join(","));
    let value = copy.pop();
    sorted.push(null);

    let i = sorted.length - 1;
    while (i > 0) {
      if (sorted[i - 1] < value) {
        break;
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
    }
    sorted[i] = value;
  }
  return sorted;
}

console.log(insertSort(arr1));
console.log(insertSort(arr2));
