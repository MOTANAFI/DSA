// function reverseOnlyLetters(S) {
//   // Convert the string to an array to easily manipulate the characters

//   const arr = S.split("");
//   // use two pointers to reverse only the letters
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     // Move left pointer if the character is not a letter
//     if (!isLetter(arr[left])) {
//       left++;
//     } else if (!isLetter(arr[right])) {
//       // Move right pointer if the character is not a letter
//       right--;
//     } else {
//       // if both are letters, swap them
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr.join("");
// }

// function isLetter(char) {
//   return char.match(/[a-z]/i);
// }

// console.log(reverseOnlyLetters("ab-cd"));
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj!!"));
