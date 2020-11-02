export const handleUp = (matrix, setMatrix, setHistory, status, setStatus) => {
  let newMatrix = matrix.slice();

  newMatrix = noTopNull(newMatrix);
  let matrixClone = newMatrix.slice();
  newMatrix = newMatrix.map((arr, l) => {
    // eslint-disable-next-line
    return arr.map((n, c) => {
      if (l !== 3) {
        if (n === matrixClone[l + 1][c] && n !== null) {
          matrixClone[l][c] = n + n;
          setStatus(status + n + n);
          matrixClone[l + 1][c] = null;
        }
      }
    });
  });
  matrixClone = noTopNull(matrixClone);
  setMatrix(matrixClone);
  window.requestAnimationFrame(() => handleMoreOne(matrixClone, setMatrix));
  setHistory(matrixClone);
};

function noTopNull(matrix) {
  const matrixClone = matrix.slice();
  let newMatrix = matrix.slice();
  let t = [];
  // eslint-disable-next-line
  matrixClone.map((arr, l) => {
    t.push([]);
    // eslint-disable-next-line
    arr.map((n, c) => {
      t[l].push(newMatrix[c][l]);
    });
  });
  t = t.map((arr, l) => {
    return arr.filter(Boolean);
  });

  for (let arr of t) {
    while (arr.length < 4) {
      arr.push(null);
    }
  }
  const tt = [];
  // eslint-disable-next-line
  t.map((arr, l) => {
    tt.push([]);
    // eslint-disable-next-line
    arr.map((n, c) => {
      tt[l].push(t[c][l]);
    });
  });
  return tt;
}

export const handleLeft = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
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
          setStatus(status + value * 2);
          newMatrix[l][c] = null;
        }
      }
      count++;
    }
  }
  newMatrix = newMatrix.map((arr) => {
    return arr.filter(Boolean);
  });
  for (let arr of newMatrix) while (arr.length < 4) arr.push(null);
  setMatrix(newMatrix);
  window.requestAnimationFrame(() => handleMoreOne(newMatrix, setMatrix));
  setHistory(newMatrix);
};

export const handleRight = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
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
          setStatus(status + value * 2);
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
      arr.unshift(null);
    }
  }
  setMatrix(newMatrix);
  window.requestAnimationFrame(() => handleMoreOne(newMatrix, setMatrix));
  setHistory(newMatrix);
};

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

export const handleDown = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
  let newMatrix = matrix.slice();
  newMatrix = noDownNull(newMatrix);
  let matrixClone = newMatrix.slice();
  newMatrix = newMatrix.map((arr, l) => {
    // eslint-disable-next-line
    return arr.map((n, c) => {
      if (l !== 0) {
        if (n === matrixClone[l - 1][c] && n !== null) {
          matrixClone[l][c] = n + n;
          setStatus(status + n + n);
          matrixClone[l - 1][c] = null;
        }
      }
    });
  });
  matrixClone = noDownNull(matrixClone);
  setMatrix(matrixClone);
  window.requestAnimationFrame(() => handleMoreOne(matrixClone, setMatrix));
  setHistory(matrixClone);
};

function noDownNull(matrix) {
  const matrixClone = matrix.slice();
  let newMatrix = matrix.slice();
  let t = [];
  // eslint-disable-next-line
  matrixClone.map((arr, l) => {
    t.push([]);
    // eslint-disable-next-line
    arr.map((n, c) => {
      t[l].push(newMatrix[c][l]);
    });
  });
  t = t.map((arr, l) => {
    return arr.filter(Boolean);
  });

  for (let arr of t) {
    while (arr.length < 4) {
      arr.unshift(null);
    }
  }
  const tt = [];
  // eslint-disable-next-line
  t.map((arr, l) => {
    tt.push([]);
    // eslint-disable-next-line
    arr.map((n, c) => {
      tt[l].push(t[c][l]);
    });
  });
  return tt;
}

const handleMoreOne = (matrix, setMatrix) => {
  const matrixClone = matrix.slice();
  let l, c;
  const matrixCloneLength = matrixClone
    .map((arr) => {
      return arr.filter(Boolean).length;
    })
    .reduce((a, b) => a + b);
  if (matrixCloneLength === 16) return;
  do {
    l = Math.floor(Math.random() * 4);
    c = Math.floor(Math.random() * 4);
  } while (matrixClone[l][c] !== null);
  matrixClone[l][c] = Math.floor(Math.random() * 6) ? 2 : 4;
  setMatrix(matrixClone);
};
