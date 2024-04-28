const arr1 = [23, 12, 43, 5, 121, 56, 4];
const arr2 = [231, 143, 653, -32, 44, 497, 6];

function mergeSort(arr) {
// 1. Check if the input is length 1 or less.
// 2. If so, it's already sorted: return.
// 3. Divide the array in half.
// 4. Recursively sort the left half.
// 5. Recursively sort the right half.
// 6. Merge the halves together and return.
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(arrA, arrB) {
    // 1. Create an empty return array.
    // 2. Point to the first value of each array.
    // 3. While there are still values in each array:
    // 4. Compare the first values of each array.
    // 5. Add the smaller value to the return array.
    // 6. Move the pointer to the next value in that array.
    // 7. Return the return array.
    let sorted = [];
    leftInd = 0;
    rightInd = 0;

    while (leftInd < arrA.length && rightInd < arrB.length) {
        if (arrA[leftInd] < arrB[rightInd]) {
            sorted.push(arrA[leftInd]);
            leftInd++;
        } else {
            sorted.push(arrB[rightInd]);
            rightInd++;
        }
    }
    return sorted
    .concat(arrA.slice(leftInd))
    .concat(arrB.slice(rightInd));
}

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
