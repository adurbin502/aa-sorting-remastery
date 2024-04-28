const arr1 = [23, 76, 43, 13, -5, -26];
const arr2 = [56, -114, -43, 2, 6, 4, 7];

function selectSort(arr) {
  // 1. Set MIN to location 0.
  // 2. Search the minimum element in the list.
  // 3. Swap with value at location MIN.
  // 4. Increment MIN to point to next element.
  // 5. Repeat until list is sorted.
  let copy = [...arr];
  let sorted = [];

  while (copy.length) {
    console.log(sorted.join(","));

    let min = 0;

    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < copy[min]) {
        min = i;
      }
    }
    let minVal = copy.splice(min, 1)[0];
    sorted.push(minVal);
  }
  return sorted;
}

console.log(selectSort(arr1));
console.log(selectSort(arr2));
