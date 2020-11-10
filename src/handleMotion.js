import {
  transposed,
  removeNull,
  insertNull,
  logical,
} from "./fnToHandleMotion";
export const handleUp = (matrix, setMatrix, setHistory, status, setStatus) => {
  let matrixClone = matrix.slice();
  matrixClone = transposed(matrixClone);

  matrixClone = removeNull(matrixClone);

  matrixClone = logical(matrixClone, setStatus, status);

  matrixClone = removeNull(matrixClone);

  insertNull(matrixClone, (matrix, value) => matrix.push(value));

  matrixClone = transposed(matrixClone);

  setMatrix(matrixClone);
  handleOneMore(matrixClone, setMatrix);
  setHistory(matrixClone);
};

export const handleLeft = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
  let matrixClone = matrix.slice();
  matrixClone = removeNull(matrixClone);

  matrixClone = logical(matrixClone, setStatus, status);

  matrixClone = removeNull(matrixClone);

  insertNull(matrixClone, (matrix, value) => matrix.push(value));

  setMatrix(matrixClone);
  handleOneMore(matrixClone, setMatrix);
  setHistory(matrixClone);
};

export const handleRight = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
  let matrixClone = matrix.slice();
  matrixClone = removeNull(matrixClone);

  matrixClone = logical(matrixClone, setStatus, status);

  matrixClone = removeNull(matrixClone);

  insertNull(matrixClone, (matrix, value) => matrix.unshift(value));

  setMatrix(matrixClone);
  handleOneMore(matrixClone, setMatrix);
  setHistory(matrixClone);
};

export const handleDown = (
  matrix,
  setMatrix,
  setHistory,
  status,
  setStatus
) => {
  let matrixClone = matrix.slice();
  matrixClone = transposed(matrixClone);

  matrixClone = removeNull(matrixClone);

  matrixClone = logical(matrixClone, setStatus, status);

  matrixClone = removeNull(matrixClone);

  insertNull(matrixClone, (matrix, value) => matrix.unshift(value));

  matrixClone = transposed(matrixClone);

  setMatrix(matrixClone);
  handleOneMore(matrixClone, setMatrix);
  setHistory(matrixClone);
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

const handleOneMore = (matrix, setMatrix) => {
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
