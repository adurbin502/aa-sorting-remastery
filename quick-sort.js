const quicksort = require("../practice-quicksort/quicksort");

const arr1 = [23, 12, 43, 5, 121, 56, 4];
const arr2 = [231, 143, 653, -32, 44, 497, 6];

function quickSort(arr) {
  // 1. Choose an element called "the pivot", how that's done is up to the implementation.
  // 2. Take two variables to point left and right of the list excluding pivot.
  // 3. Left points to the low index.
  // 4. Right points to the high index.
  // 5. While value at left is less than pivot move right.
  // 6. While value at right is greater than pivot move left.
  // 7. If both step 5 and step 6 does not match, swap left and right.
  // 8. If left ≥ right, the point where they met is new pivot.
  // 9. Repeat, recursively calling this for smaller and smaller arrays.
  if (arguments.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

console.log(quickSort(arr1));
console.log(quickSort(arr2));
