function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const row = matrix.length;
  const column = matrix[0].length;

  let left = 0;
  let right = row * column - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / column)][mid % column];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// const tar = 3;

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const tar = 13;

console.log(searchMatrix(matrix, tar));
