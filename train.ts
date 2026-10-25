// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) count++;
//     if (typeof obj[k] === 'object' && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// console.log(
//   countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model')
// ); 


// Y - task
function findIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}

console.log(findIntersection([1, 2, 3], [3, 2, 0])); // [2, 3]