export const isPosibleUp = (matrix) => {
  return Boolean(
    matrix
      .map((arr, l) => {
        return arr
          .map((n, c) => {
            if (l !== 0) {
              const current = n;
              const nextUp = matrix[l - 1][c];
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

export const isPosibleDown = (matrix) => {
  return Boolean(
    matrix
      .map((arr, l) => {
        return arr
          .map((n, c) => {
            if (l !== 3) {
              const current = n;
              const nextDown = matrix[l + 1][c];
              if (nextDown === null && current !== null) return true;
              if (current === nextDown && current !== null) return true;
            }
            return false;
          })
          .filter(Boolean)
          .includes(true);
      })
      .filter(Boolean)[0]
  );
};

export const isPosibleLeft = (matrix) => {
  return Boolean(
    matrix
      .map((arr, l) => {
        return arr
          .map((n, c) => {
            if (c !== 0) {
              const current = n;
              const nextLeft = matrix[l][c - 1];
              if (nextLeft === null && current !== null) return true;
              if (current === nextLeft && current !== null) return true;
            }
            return false;
          })
          .filter(Boolean)
          .includes(true);
      })
      .filter(Boolean)[0]
  );
};

export const isPosibleRight = (matrix) => {
  return Boolean(
    matrix
      .map((arr, l) => {
        return arr
          .map((n, c) => {
            if (c !== 3) {
              const current = n;
              const nextRight = matrix[l][c + 1];
              if (nextRight === null && current !== null) return true;
              if (current === nextRight && current !== null) return true;
            }
            return false;
          })
          .filter(Boolean)
          .includes(true);
      })
      .filter(Boolean)[0]
  );
};
