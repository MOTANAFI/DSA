function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minMax = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minMax]) {
        minMax = j;
      }
    }
    if (i !== minMax) {
      let temp = arr[i];
      arr[i] = arr[minMax];
      arr[minMax] = temp;
    }
  }
  return arr
}

const myArr = [4, 2, 6, 5, 1, 3];

const res = selectionSort(myArr);
console.log(res)
