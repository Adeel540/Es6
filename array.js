var prompt = require('prompt-sync')();
//index find

// const number=[1,2,3,4,5,6]
// const indx=number.indexOf(5);
// console.log(indx)


///00 shift in right side

const a = [1,0,5,9,0,6,9];

for(let i = 1, j = a.length-1; i < j;){

  if(a[i] === 0 && a[j] !== 0){
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  } else if(a[i] !== 0){
    i++; 
  } else if(a[j] === 0){
    j--;
  } 

}

console.log(a); 


const b = [9, 6, 5, 3, 2];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] < a[j]) {
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}

console.log(b);  // [9, 6, 5, 3, 2]

// let a = [, 0, 2, 1, 2, 0, 0, 0];
// let b = [];
// let zeros = [];
// let sameNumIndices = new Map();

// for (let i = 0; i < a.length; i++) {
//   if (a[i] !== 0 && typeof a[i] !== 'undefined') {
//     b.unshift(a[i]);
//     if (!sameNumIndices.has(a[i])) {
//       sameNumIndices.set(a[i], [i]);
//     } else {
//       sameNumIndices.get(a[i]).push(i);
//     }
//   } else if (a[i] === 0) {
//     zeros.push(a[i]);
//   } else {
//     b.unshift(a[i]);
//   }
// }

// b = b.concat(zeros);

// // check if there are undefined elements in the beginning of the array
// let undefIndex = 0;
// while (typeof b[undefIndex] === 'undefined') {
//   undefIndex++;
// }
// for (let i = 0; i < undefIndex; i++) {
//   b.splice(i, 0, undefined);
// }

// //
// for (let [num, indices] of sameNumIndices) {
//   if (indices.length > 2) {
//     let firstIndex = b.indexOf(num);
//     for (let i = 1; i < indices.length; i++) {
//       let indexInB = firstIndex + i;
//       b.splice(indexInB, 0, num);
//     }
//   }
// }


// while (typeof b[0] === 'undefined') {
//   let undefElement = b.pop();
//   b.unshift(undefElement);
// }

// console.log(b); 



//find array 

// const arr = ['adeel','adil','bonna','']; // Example array

// const search = prompt("Enter any name: ");

// let index = -1;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === search){
//     index = i;
//     break;
//   }
// }

// if(index !== -1){
//   console.log(`chacrter found at index ${index}.`);
// } else {
//   console.log("character not found in array.");
// }


    