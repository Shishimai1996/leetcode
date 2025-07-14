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

// function floodFill(
//   image: number[][],
//   sr: number,
//   sc: number,
//   color: number
// ): number[][] {
//   const originalColor = image[sr][sc];
//   if (originalColor === color) return image;

//   let row = image.length;
//   let col = image[0].length;
//   const queue: [number, number][] = [[sr, sc]];

//   const directions = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];

//   while (queue.length > 0) {
//     console.log({ queue });
//     const current = queue.shift();
//     console.log(current);
//     if (!current) continue;
//     const [r, c] = current;

//     image[r][c] = color;

//     for (const [dr, dc] of directions) {
//       const newRow = r + dr;
//       console.log({ newRow });
//       const newCol = c + dc;

//       if (
//         newRow >= 0 &&
//         newRow < row &&
//         newCol >= 0 &&
//         newCol < col &&
//         image[newRow][newCol] === originalColor
//       ) {
//         queue.push([newRow, newCol]);
//       }
//     }
//   }
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
  const numberOfRows = image.length;
  if (numberOfRows === 0) {
    return image;
  }
  const numberOfCols = image[0].length;
  if (numberOfCols === 0) {
    return image;
  }
  return updateAdjacent(
    image,
    numberOfRows,
    numberOfCols,
    sr,
    sc,
    image[sr][sc],
    color
  );
}

function updateAdjacent(
  image: number[][],
  numberOfRows: number,
  numberOfCols: number,
  row: number,
  col: number,

  currentColor: number,
  newColor: number
): number[][] {
  if (image[row][col] == newColor) {
    return image;
  }
  image[row][col] = newColor;

  if (col != 0) {
    if (currentColor == image[row][col - 1]) {
      image = updateAdjacent(
        image,
        numberOfRows,
        numberOfCols,
        row,
        col - 1,
        currentColor,
        newColor
      );
    }
  }
  if (row != 0) {
    if (currentColor == image[row - 1][col]) {
      image = updateAdjacent(
        image,
        numberOfRows,
        numberOfCols,
        row - 1,
        col,
        currentColor,
        newColor
      );
    }
  }
  if (col != numberOfCols - 1) {
    if (currentColor == image[row][col + 1]) {
      image = updateAdjacent(
        image,
        numberOfRows,
        numberOfCols,
        row,
        col + 1,
        currentColor,
        newColor
      );
    }
  }
  if (row != numberOfRows - 1) {
    if (currentColor == image[row + 1][col]) {
      image = updateAdjacent(
        image,
        numberOfRows,
        numberOfCols,
        row + 1,
        col,
        currentColor,
        newColor
      );
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
