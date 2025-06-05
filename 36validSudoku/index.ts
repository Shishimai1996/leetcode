function isValidSudoku(board: string[][]): boolean {
  let checkRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let checkColumn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let checkBox = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const index = Number(board[i][j]) - 1;
        if (checkRow[index] === 1) {
          return false;
        } else {
          checkRow[index] = 1;
        }
      }
      if (board[j][i] !== ".") {
        const index = Number(board[j][i]) - 1;
        if (checkColumn[index] === 1) {
          return false;
        } else {
          checkRow[index] = 1;
        }
      }

      const rowIdx = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const colIdx = 3 * (i % 3) + (j % 3);
      if (board[rowIdx][colIdx] !== ".") {
        const num = Number(board[rowIdx][colIdx]) - 1;
        if (checkBox[num]) return false;
        checkBox[num] = 1;
      }
    }
  }
  console.log(checkColumn);
  if (!checkColumn && !checkRow) {
    return false;
  } else {
    return true;
  }
}

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
