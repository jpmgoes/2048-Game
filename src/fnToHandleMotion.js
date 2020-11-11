export function transposed(matrix) {
  let t = [];
  matrix.map((arr, l) => {
    t.push([]);
    return arr.map((n, c) => {
      t[l].push(matrix[c][l]);
      return n;
    });
  });
  return t;
}

export function removeNull(matrix) {
  const arrNoNull = matrix.map((arr) => {
    return arr.filter(Boolean);
  });
  return arrNoNull;
}

export function insertNull(matrix, callback) {
  for (let arr of matrix) {
    while (arr.length < 4) {
      callback(arr, null);
    }
  }
  return matrix;
}

export function logical(matrix, setScore, score) {
  let newMatrix = [];

  for (let arr of matrix) {
    const l = matrix.indexOf(arr);
    newMatrix.push(arr);
    let count = 0;
    for (let n of arr) {
      const c = arr.indexOf(n, count);
      if (c !== 0) {
        if (n === newMatrix[l][c - 1] && n !== null) {
          let value = newMatrix[l][c];
          newMatrix[l][c - 1] = value * 2;
          setScore(score + value * 2);
          newMatrix[l][c] = null;
          break;
        }
      }
      count++;
    }
  }
  return newMatrix;
}
