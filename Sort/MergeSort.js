// Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    
    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(leftArr, rightArr) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  result.push(...leftArr.slice(leftIndex));
  result.push(...rightArr.slice(rightIndex));
  return result
}

const res = merge([3, 27, 38, 43], [9, 10, 17, 82]);
console.log(res);

const res2 = mergeSort([3, 27, 38, 43, 9, 10, 17, 82]);
console.log(res2);