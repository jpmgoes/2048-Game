export const isPossible = (matrix, isVertical, ...num) => {
  const matrixClone = matrix.slice();
  return Boolean(
    matrixClone
      .map((arr, l) => {
        return arr
          .map((n, c) => {
            if (isVertical === "v" ? l !== num[0] : c !== num[0]) {
              const current = n;
              const nextUp = matrixClone[l - num[1]][c - num[2]];
              if (nextUp === null && current !== null) return true;
              if (current === nextUp && current !== null) return true;
            }
            return false;
          })
          .filter(Boolean)
          .includes(true);
      })
      .filter(Boolean)[0]
  );
};

// isPossible - Top => isPossible(matrix, "v", 0, 1, 0);
// isPossible - Down => isPossible(matrix, "v", 3, -1, 0);
// isPossible - Left => isPossible(matrix, "h", 0, 0, 1);
// isPossible - Right => isPossible(matrix, "h", 3, 0, -1);

export const isWin = (matrix) => {
  const arr = matrix
    .slice()
    .map((arr) => {
      return arr
        .map((n) => {
          if (n === 2048) return true;
          return false;
        })
        .filter(Boolean);
    })
    .filter(Boolean);
  return arr[0][0];
};
