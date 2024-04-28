const arr1 = [2, 5, 65, -5, 32];
const arr2 = [123, 74, 231, 54, 53];


function bubbles(arr) {
//   1. If the current value is greater than its neighbor to the right
//   2. Swap those values
//   3. If you get to the end of the array and no swaps have occurred, return
//   4. Otherwise, repeat from the beginning
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let sub = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = sub;
                swapped = true;
                console.log(arr.join(","));
            }
        }
    } while (swapped);
}

console.log(bubbles(arr1));
console.log(bubbles(arr2));
