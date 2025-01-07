//O(n) - Linear Time Complexity
// const studentsDatabase = ["mohamed", "erick", "John", "michael"];
// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log(`Fount ${studentName}`);
//       return
//     }
//   }
// };

// findStudent(studentsDatabase, "erick");

// const groceries = ['milk', 'bread', 'eggs', 'flour', 'cheese', 'sugar'];

// const searchForItem = item => {
//     for(let i=0; i<groceries.length; i++){
//         if(groceries[i] === item){console.log(`Found ${item}`);
//             return;
//     }
// }

// for(let j=0; j<groceries.length; j++){
//     if(groceries[j] == item ) {
//         console.log(`Found ${item}`);
//         return
//     }
// }
// // n + n = 2n => O(n)
// }

// searchForItem('eggs');

// O(1), or constant time complexity, means that the time taken to execute an operation is the same regardless of the size of the input.

const numbers = [1,2,3,4,5];

const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 3)); // O(1) - Constant Time Complexity`