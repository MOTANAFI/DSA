//Write a function that takes an array and a chunk size as input
// The function should return a new array where the original array
// is split into chunks of the specified size
// chunk([1,2,3,4,5,6,7,8], 3)  [[123],[456],[7,8]]
// chunkArray([12345],2) output [[1,2],[3,4]]

// Create an empty array to hold the chunks
// set a starting inex to keep track of the current index from the original array
// Loop through the original array as long as the index hasn't reached
// the end of the array
//Add the extracted chunk to the array
// move the index forward by the chunk size to get the next chunk
// Return the array of chunks

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + chunkSize);
    chunks.push(chunk);
    index += chunkSize;
  }
  return chunks
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
