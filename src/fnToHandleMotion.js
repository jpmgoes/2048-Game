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

// export function animation(before, after) {
//   // verificar todas as linhas
//   let i = 0;
//   while (i < 4) {
//     const linhaBefore = before[i];
//     const linhaAfter = after[i];
//     let index = [];

//     // find index
//     let count = 0;
//     linhaAfter.map((n, j) => {
//       if (n !== null) {
//         if (j !== 3 && n === linhaAfter[j + 1]) index.push(null);
//         else index.push(linhaBefore.indexOf(n, count++));
//       }
//       return n;
//     });

//     //^ fill index
//     while (index.length < 4) index.unshift(null);
//     anime(index, i);
//     i++;
//   }
//   console.log("--------------");
// }

// function anime(index, linha) {
//   for (let i of index) {
//     if (i !== null) {
//       const c = index.indexOf(i);

//       //^ before after
//       const elementBefore = document.querySelector(`.miniBox${linha}${i}`); // +
//       const elementAfter = document.querySelector(`.miniBox${linha}${c}`);
//       const qntsCasas = c - i;
//       //
//       if (`.miniBox${linha}${i}` !== `.miniBox${linha}${c}`) {
//         console.log(`.miniBox${linha}${i} | .miniBox${linha}${c}`);
//         console.log(elementBefore, elementAfter);
//         elementBefore.style.transition = `all 3s`;
//         setTimeout(() => {
//           elementBefore.style.transition = `all 0.1s`;
//           elementBefore.style.left = `${-233 / 2}px`;
//           elementBefore.style.left = `${qntsCasas * -3}px`;
//         }, 1000);
//         // elementBefore.style.left = `${(227 / 3) * qntsCasas}px`;
//         // elementAfter.style.left = `${-(227 / 3) * qntsCasas}px`;
//         //   .miniBoxDefault.miniBox32 { era num, virou +
//         //   left: -3px;
//         // }
//         //   .miniBoxDefault.miniBox33 { era mais, virou num
//         //     background: #fff;
//         //     right: 233px;
//         // }
//       }
//     }
//   }
// }
