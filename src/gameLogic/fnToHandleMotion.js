export function transposed(array) {
  const matrixTransposed = array.slice();
  return matrixTransposed[0].map((_, colIndex) =>
    matrixTransposed.map((row) => row[colIndex])
  );
}

export function removeNull(matrix) {
  const arrNoNull = matrix.map((arr) => {
    return arr.filter(Boolean);
  });
  return arrNoNull;
}

export function insertNull(matrix, callback) {
  const newMatrix = matrix.slice();
  for (let arr of newMatrix) {
    while (arr.length < 4) {
      callback(arr, null);
    }
  }
  return newMatrix;
}

function counter(arr) {
  const count = {};
  const setOfArr = new Set(arr);

  for (const num of setOfArr) {
    if (num === 0) continue;
    Object.defineProperty(count, `${num}`, {
      enumerable: true,
      value: 0,
      writable: true,
    });
  }
  const arrCopy = arr.slice();
  for (const key in count) {
    arrCopy.forEach((n) => {
      if (n === +key) {
        count[key] += 1;
      }
    });
  }
  return count;
}

export function logic(arr, setScore, bool) {
  const count = counter(arr);
  let left = 0;
  let right = 1;
  if (bool) {
    left = 1;
    right = 0;
  }
  const arrClone = arr.slice();
  const arrCopy = arr.slice();
  let bool2 = true;
  arrCopy.forEach((num, index) => {
    if (num / 2 >= 1)
      if (index < 3) {
        const times = count[`${num}`];
        let add = 0;
        if (bool && times === 3 && bool2) {
          if (arrClone[index + right] === arrClone[index + 2]) {
            add = 1;
            bool2 = false;
          }
        }
        const currently = arrClone[index + left];
        const valueAround = arrClone[index + right];
        if (valueAround === currently) {
          arrClone[index + right + add] += currently;
          setScore((prevScore) => prevScore + currently);
          arrClone[index + left + add] = 0;
        }
      }
  });
  return arrClone;
}
