function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentVal){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currentVal
    }
    return arr

}



const myArr = [4, 2, 6, 5, 1, 3];

const res = insertionSort(myArr);
console.log(res)