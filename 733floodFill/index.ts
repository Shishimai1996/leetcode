// function floodFill(
//   image: number[][],
//   sr: number,
//   sc: number,
//   color: number
// ): number[][] {
//   if (image.length === 0) return [];

//   const originalColor = image[sr][sc];
//   if (originalColor === color) return image;

//   let row = image.length;
//   let col = image[0].length;

//   function dfs(r: number, c: number) {
//     if (
//       r < 0 ||
//       c < 0 ||
//       r >= row ||
//       c >= col ||
//       image[r][c] !== originalColor
//     ) {
//       return;
//     }
//     image[r][c] = color;

//     dfs(r + 1, c);
//     dfs(r - 1, c);
//     dfs(r, c + 1);
//     dfs(r, c - 1);
//   }
//   dfs(sr, sc);
//   return image;
// }

// const image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// const sr = 1;
// const sc = 1;
// const color = 2;

// console.log(floodFill(image, sr, sc, color));

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  let row = image.length;
  let col = image[0].length;
  const queue: [number, number][] = [[sr, sc]];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    console.log({ queue });
    const current = queue.shift();
    console.log(current);
    if (!current) continue;
    const [r, c] = current;

    image[r][c] = color;

    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow < row &&
        newCol >= 0 &&
        newCol < col &&
        image[newRow][newCol] === originalColor
      ) {
        queue.push([newRow, newCol]);
      }
    }
  }
  return image;
}

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;

console.log(floodFill(image, sr, sc, color));
