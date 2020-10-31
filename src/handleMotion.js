export const handleRight = (matrix, callback) => {
  const matrixClone = matrix.slice().map((arr) => {
    return arr.filter(Boolean);
  });
  let newMatrix = [];
  for (let arr of matrixClone) {
    const l = matrixClone.indexOf(arr);
    newMatrix.push(arr);
    let count = 0;
    for (let n of arr) {
      const c = arr.indexOf(n, count);
      if (c !== 3) {
        if (n === newMatrix[l][c + 1] && n !== null) {
          let k = c + 1;
          let value = newMatrix[l][c];
          const find = new RegExp(String(value), "g");
          const qnts = arr.join(" ").match(find).length;
          if (qnts % 2 !== 0) {
            while (k < 4) {
              if (value !== newMatrix[l][k] || k === 3) {
                newMatrix[l][k] = value * 2;
                newMatrix[l][k - 1] = null;
                break;
              }
              k++;
            }
          } else {
            newMatrix[l][c + 1] = value * 2;
            newMatrix[l][c] = null;
          }
        }
      }
      count++;
    }
  }
  newMatrix = newMatrix.map((arr) => {
    return arr.filter(Boolean);
  });
  for (let arr of newMatrix) {
    while (arr.length < 4) {
      arr.unshift(null);
    }
  }
  callback(newMatrix);
};

export const handleLeft = (matrix, callback) => {
  const matrixClone = matrix.slice().map((arr) => {
    return arr.filter(Boolean);
  });
  let newMatrix = [];
  for (let arr of matrixClone) {
    const l = matrixClone.indexOf(arr);
    newMatrix.push(arr);
    let count = 0;
    for (let n of arr) {
      const c = arr.indexOf(n, count);
      if (c !== 0) {
        if (n === newMatrix[l][c - 1] && n !== null) {
          let value = newMatrix[l][c];
          newMatrix[l][c - 1] = value * 2;
          newMatrix[l][c] = null;
        }
      }
      count++;
    }
  }
  newMatrix = newMatrix.map((arr) => {
    return arr.filter(Boolean);
  });
  for (let arr of newMatrix) {
    while (arr.length < 4) {
      arr.push(null);
    }
  }
  callback(newMatrix);
};

export const handleUp = (matrix, callback) => {
  let newMatrix = matrix.slice();
  noTopNull(newMatrix);
  let matrixClone = newMatrix.slice();
  newMatrix = newMatrix.map((arr, l) => {
    return arr.map((n, c) => {
      if (l !== 3) {
        if (n === matrixClone[l + 1][c] && n !== null) {
          matrixClone[l][c] = n + n;
          matrixClone[l + 1][c] = null;
        }
      }
    });
  });
  noTopNull(matrixClone);
  callback(matrixClone);
};

function noTopNull(matrix) {
  let matrixClone = matrix.slice();
  for (let arr of matrixClone) {
    let count = 0;
    for (let n of arr) {
      const l = arr.indexOf(n, count);
      let k = 0;
      while (k < 3) {
        if (matrixClone[k][l] === null) {
          matrixClone[k][l] = matrixClone[k + 1][l];
          matrixClone[k + 1][l] = null;
        }
        k++;
      }
      count++;
    }
  }
  return matrixClone;
}

export const handleDown = (matrix, callback) => {
  let newMatrix = matrix.slice();
  noDownNull(newMatrix);
  let matrixClone = newMatrix.slice();
  newMatrix = newMatrix.map((arr, l) => {
    return arr.map((n, c) => {
      if (l !== 0) {
        if (n === matrixClone[l - 1][c] && n !== null) {
          matrixClone[l][c] = n + n;
          matrixClone[l - 1][c] = null;
        }
      }
    });
  });
  noDownNull(matrixClone);
  callback(matrixClone);
};

function noDownNull(matrix) {
  let newMatrix = matrix.slice();
  for (let arr of matrix) {
    let count = 0;
    for (let n of arr) {
      const l = arr.indexOf(n, count);
      let k = 3;
      while (k < 4 && k > 0) {
        if (matrix[k][l] === null) {
          matrix[k][l] = matrix[k - 1][l];
          matrix[k - 1][l] = null;
        }
        k--;
      }
      count++;
    }
  }
  return newMatrix;
}
export const handleRandomValues = () => {
  let matrix = Array(4).fill(Array(4).fill(null));
  let random1;
  let random2;
  const random3 = Math.floor(Math.random() * 4);
  do {
    random1 = Math.floor(Math.random() * 4);
    random2 = Math.floor(Math.random() * 4);
  } while (random1 === random2);
  const line = [random1, random2].sort((a, b) => a - b);
  let column = random3;
  matrix = matrix.map((arr, l) => {
    if (line.includes(l)) {
      return arr.map((n, c) => {
        const random = Math.floor(Math.random() * 4) ? 2 : 4;
        if (c === column) return random;
        const r = Math.floor(Math.random() * 4);
        column += column + r - c <= 0 ? r : 0;
        return n;
      });
    } else return arr;
  });
  return matrix;
};
