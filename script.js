const matrica = [
  [7, 8, 9, 10, 11, 9, 8, 7],
  [12, 12, 12, 12, 12, 12, 12, 12],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [6, 6, 6, 6, 6, 6, 6, 6],
  [1, 2, 3, 4, 5, 3, 2, 1],
];
let playWhite = true;
let playBlack = false;

function loadChess() {
  const chess = document.querySelector(".chess");
  chess.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    chess.appendChild(row);
    for (let j = 0; j < 8; j++) {
      const field = document.createElement("div");
      field.classList.add("field");
      field.classList.add("position" + i + j);
      row.appendChild(field);

      if (matrica[i][j] === 1) {
        field.classList.add("darkFigure");
      }

      if ((i + j) % 2 === 0) {
        field.classList.add("dark");
      } else {
        field.classList.add("bright");
      }

      showFigure(i, j, field);
      addClickListenerToField(onFieldClick, i, j);
    }
  }
}

loadChess();


function getRockFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i - 1; a >= 0; a--) {
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= 0; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  return allowedFields;
}
function getBlackQueenFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i - 1; a >= 0; a--) {
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + j);

      if (matrica[a][j] != 0) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i + 1; a <= 7; a++) {

    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= 0; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  let b = j;
  for (let a = i - 1; a >= 0; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] > 6) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (c === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] > 6) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (d === 0) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] > 6) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a <= 7; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] > 6) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getBlackBishopFreeFields(i, j) {
  const allowedFields = [];

  let b = j;
  for (let a = i - 1; a >= 0; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] > 6) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (c === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] > 6) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (d === 0) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] > 6) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a <= 7; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] > 6) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getBlackKingFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i - 1; a >= i - 1; a--) {
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + j);

      if (matrica[a][j] != 0) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i + 1; a <= i + 1; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] > 6) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= j - 1; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= j + 1; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] > 6) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  let b = j;
  for (let a = i - 1; a >= i - 1; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] > 6) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= i + 1; a++) {
    if (j <= 7) {
      if (i === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] > 6) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= i + 1; a++) {
    if (i <= 7) {
      if (i === 7) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] > 6) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a >= i - 1; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] > 6) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getBlackKnightFreeFields(i, j) {
  const allowedFields = [];

  let b = j;
  let a = i - 2;
  if (i >= 0) {
    if (b === 7) {
    }
    b--;
  }
  if (a >= 0) {
    let allowMove = document.querySelector(".position" + a + b);
    if (matrica[a][b] != 0) {
      if (matrica[a][b] > 6) {
        allowedFields.push({ i: a, j: b });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: a, j: b });
    }
  }

  let bb = j;
  let aa = i - 2;
  if (i >= 0) {
    if (bb === 7) {
    }
    bb++;
  }
  if (aa >= 0) {
    let allowMove = document.querySelector(".position" + aa + bb);
    if (matrica[aa][bb] != 0) {
      if (matrica[aa][bb] > 6) {
        allowedFields.push({ i: aa, j: bb });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: aa, j: bb });
    }
  }

  let bc = j;
  let ac = i + 2;
  if (i <= 7) {
    if (ac > 7) {
      ac = i;
    }
    bc--;
  }
  if (ac >= 0) {
    let allowMove = document.querySelector(".position" + ac + bc);
    if (matrica[ac][bc] != 0) {
      if (matrica[ac][bc] > 6) {
        allowedFields.push({ i: ac, j: bc });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ac, j: bc });
    }
  }

  let bd = j;
  let ad = i + 2;
  if (i <= 7) {
    if (ad > 7) {
      ad = i;
    }
    bd++;
  }
  if (ad >= 0) {
    let allowMove = document.querySelector(".position" + ad + bd);
    if (matrica[ad][bd] != 0) {
      if (matrica[ad][bd] > 6) {
        allowedFields.push({ i: ad, j: bd });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ad, j: bd });
    }
  }

  let c = j;
  let g = i - 1;
  if (i <= 7) {
    if (g > 7) {
    }
    c = c + 2;
  }
  if (g >= 0) {
    let allowMove = document.querySelector(".position" + g + c);
    if (matrica[g][c] != 0) {
      if (matrica[g][c] > 6) {
        allowedFields.push({ i: g, j: c });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: g, j: c });
    }
  }

  let d = j;
  let h = i - 1;
  if (i <= 7) {
    if (h > 7) {
    }
    d = d - 2;
  }
  if (h >= 0) {
    let allowMove = document.querySelector(".position" + h + d);
    if (matrica[h][d] != 0) {
      if (matrica[h][d] > 6) {
        allowedFields.push({ i: h, j: d });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: h, j: d });
    }
  }

  let e = j;
  let ha = i + 1;
  if (i <= 7) {
    if (ha > 7) {
      ha = i;
    }
    e = e - 2;
  }
  if (ha >= 0) {
    let allowMove = document.querySelector(".position" + ha + e);
    if (matrica[ha][e] != 0) {
      if (matrica[ha][e] > 6) {
        allowedFields.push({ i: ha, j: e });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ha, j: e });
    }
  }

  let f = j;
  let hb = i + 1;
  if (i <= 7) {
    if (hb > 7) {
      hb = i;
    }
    f = f + 2;
  }
  if (hb >= 0) {
    let allowMove = document.querySelector(".position" + hb + f);
    if (matrica[hb][f] != 0) {
      if (matrica[hb][f] > 6) {
        allowedFields.push({ i: hb, j: f });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: hb, j: f });
    }
  }

  return allowedFields;
}

function getBlackPawnFreeFields(i, j) {
  const allowedFields = [];
  if (i === 6) {
    for (let a = i - 1; a >= i - 2; a--) {
      if (a >= 0) {
        let allowMove = document.querySelector(".position" + a + j);
        if (matrica[a][j] !== 0) {
          break;
        } else {
          allowMove.classList.add("colorField");
          allowedFields.push({ i: a, j });
        }
      }
    }
  } else {
    for (let a = i - 1; a >= i - 1; a--) {
      if (a >= 0) {
        let allowMove = document.querySelector(".position" + a + j);
        if (matrica[a][j] !== 0) {
          break;
        } else {
          allowMove.classList.add("colorField");
          allowedFields.push({ i: a, j });
        }
      }
    }
  }
  let ha = i - 1;
  if (ha === -1) {
    ha = 0;
  }
  if (matrica[ha][j - 1] !== 0) {
    const allowMove = document.querySelector(".position" + ha + (j - 1));
    if (matrica[i][j] === 6) {
      if (matrica[ha][j - 1] > 6) {
        if (i === 0) {
        } else {
          allowedFields.push({ i: ha, j: j - 1 });
          allowMove.classList.add("colorField");
        }
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i, j });
    }
  }

  let hb = i - 1;
  if (hb === -1) {
    hb = 0;
  }
  if (matrica[hb][j + 1] !== 0) {
    const allowMove = document.querySelector(".position" + hb + (j + 1));
    if (matrica[i][j] === 6) {
      if (i === 0) {
      } else {
        if (matrica[hb][j + 1] > 6) {
          allowedFields.push({ i: hb, j: j + 1 });
          allowMove.classList.add("colorField");
        }
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i, j });
    }
  }

  return allowedFields;
}
function getWhiteRockFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i + 1; a <= 7; a++) {
    if (a <= 7) {
      let allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i - 1; a >= 0; a--) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= 0; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  return allowedFields;
}
function getWhiteQueenFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i - 1; a >= 0; a--) {
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + j);

      if (matrica[a][j] != 0) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= 0; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= 7; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  let b = j;
  for (let a = i - 1; a >= 0; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] < 7) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (c === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] < 7) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (d === 0) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] < 7) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a <= 7; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] < 7) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getWhiteBishopFreeFields(i, j) {
  const allowedFields = [];

  let b = j;
  for (let a = i - 1; a >= 0; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] < 7) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (c === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] < 7) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= 7; a++) {
    if (j <= 7) {
      if (d === 0) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] < 7) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a <= 7; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] < 7) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getWhiteKingFreeFields(i, j) {
  const allowedFields = [];
  for (let a = i - 1; a >= i - 1; a--) {
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + j);

      if (matrica[a][j] != 0) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = i + 1; a <= i + 1; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + a + j);
      if (matrica[a][j]) {
        if (matrica[a][j] < 7) {
          allowedFields.push({ i: a, j });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j });
      }
    }
  }

  for (let a = j - 1; a >= j - 1; a--) {
    if (a >= 0) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  for (let a = j + 1; a <= j + 1; a++) {
    if (a <= 7) {
      const allowMove = document.querySelector(".position" + i + a);
      if (matrica[i][a]) {
        if (matrica[i][a] < 7) {
          allowedFields.push({ i, j: a });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i, j: a });
      }
    }
  }

  let b = j;
  for (let a = i - 1; a >= i - 1; a--) {
    if (i >= 0) {
      if (b === 7) {
        break;
      }
      b++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + b);
      if (matrica[a][b] != 0) {
        if (matrica[a][b] < 7) {
          allowedFields.push({ i: a, j: b });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: b });
      }
    }
  }

  let c = j;
  for (let a = i + 1; a <= i + 1; a++) {
    if (j <= 7) {
      if (i === 7) {
        break;
      }
      c++;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + c);
      if (matrica[a][c] != 0) {
        if (matrica[a][c] < 7) {
          allowedFields.push({ i: a, j: c });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: c });
      }
    }
  }

  let d = j;
  for (let a = i + 1; a <= i + 1; a++) {
    if (i <= 7) {
      if (i === 7) {
        break;
      }
      d--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + d);
      if (matrica[a][d] != 0) {
        if (matrica[a][d] < 7) {
          allowedFields.push({ i: a, j: d });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: d });
      }
    }
  }

  let e = j;
  for (let a = i - 1; a >= i - 1; a--) {
    if (j <= 7) {
      if (e === 0) {
        break;
      }
      e--;
    }
    if (a >= 0) {
      let allowMove = document.querySelector(".position" + a + e);
      if (matrica[a][e] != 0) {
        if (matrica[a][e] < 7) {
          allowedFields.push({ i: a, j: e });
          allowMove.classList.add("colorField");
        }
        break;
      } else {
        allowMove.classList.add("colorField");
        allowedFields.push({ i: a, j: e });
      }
    }
  }

  return allowedFields;
}

function getWhiteKnightFreeFields(i, j) {
  const allowedFields = [];

  let b = j;
  let a = i - 2;
  if (i >= 0) {
    if (b === 7) {
    }
    b--;
  }
  if (a >= 0) {
    let allowMove = document.querySelector(".position" + a + b);
    if (matrica[a][b] != 0) {
      if (matrica[a][b] < 7) {
        allowedFields.push({ i: a, j: b });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: a, j: b });
    }
  }

  let bb = j;
  let aa = i - 2;
  if (i >= 0) {
    if (bb === 7) {
    }
    bb++;
  }
  if (aa >= 0) {
    let allowMove = document.querySelector(".position" + aa + bb);
    if (matrica[aa][bb] != 0) {
      if (matrica[aa][bb] < 7) {
        allowedFields.push({ i: aa, j: bb });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: aa, j: bb });
    }
  }

  let bc = j;
  let ac = i + 2;
  if (i <= 7) {
    if (ac > 7) {
      ac = i - 2;
    }
    bc--;
  }
  if (ac >= 0) {
    let allowMove = document.querySelector(".position" + ac + bc);
    if (matrica[ac][bc] != 0) {
      if (matrica[ac][bc] < 7) {
        allowedFields.push({ i: ac, j: bc });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ac, j: bc });
    }
  }

  let bd = j;
  let ad = i + 2;
  if (i <= 7) {
    if (ad > 7) {
      ad = i - 2;
    }
    bd++;
  }
  if (ad >= 0) {
    let allowMove = document.querySelector(".position" + ad + bd);
    if (matrica[ad][bd] != 0) {
      if (matrica[ad][bd] < 7) {
        allowedFields.push({ i: ad, j: bd });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ad, j: bd });
    }
  }

  let c = j;
  let g = i - 1;
  if (i <= 7) {
    if (g > 7) {
    }
    c = c + 2;
  }
  if (g >= 0) {
    let allowMove = document.querySelector(".position" + g + c);
    if (matrica[g][c] != 0) {
      if (matrica[g][c] < 7) {
        allowedFields.push({ i: g, j: c });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: g, j: c });
    }
  }

  let d = j;
  let h = i - 1;
  if (i <= 7) {
    if (h > 7) {
    }
    d = d - 2;
  }
  if (h >= 0) {
    let allowMove = document.querySelector(".position" + h + d);
    if (matrica[h][d] != 0) {
      if (matrica[h][d] < 7) {
        allowedFields.push({ i: h, j: d });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: h, j: d });
    }
  }

  let e = j;
  let ha = i + 1;
  if (i <= 7) {
    if (ha > 7) {
      ha = i - 1;
    }
    e = e - 2;
  }
  if (ha >= 0) {
    let allowMove = document.querySelector(".position" + ha + e);
    if (matrica[ha][e] != 0) {
      if (matrica[ha][e] < 7) {
        allowedFields.push({ i: ha, j: e });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: ha, j: e });
    }
  }

  let f = j;
  let hb = i + 1;
  if (i <= 7) {
    if (hb > 7) {
      hb = i - 1;
    }
    f = f + 2;
  }
  if (hb >= 0) {
    let allowMove = document.querySelector(".position" + hb + f);
    if (matrica[hb][f] != 0) {
      if (matrica[hb][f] < 7) {
        allowedFields.push({ i: hb, j: f });
        allowMove.classList.add("colorField");
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i: hb, j: f });
    }
  }

  return allowedFields;
}

function getWhitePawnFreeFields(i, j) {
  const allowedFields = [];
  if (i === 1) {
    for (let a = i + 1; a <= i + 2; a++) {
      if (a >= 0) {
        let allowMove = document.querySelector(".position" + a + j);
        if (matrica[a][j] !== 0) {
          break;
        } else {
          allowMove.classList.add("colorField");
          allowedFields.push({ i: a, j });
        }
      }
    }
  } else {
    let he = i + 1;
    if (he === 8) {
      he = 7;
    }
    for (let a = he; a <= he; a++) {
      if (a >= 0) {
        let allowMove = document.querySelector(".position" + a + j);
        if (matrica[a][j] !== 0) {
          break;
        } else {
          allowMove.classList.add("colorField");
          allowedFields.push({ i: a, j });
        }
      }
    }
  }
  let ha = i + 1;
  if (ha === 8) {
    ha = 7;
  }
  if (matrica[ha][j - 1] !== 0) {
    const allowMove = document.querySelector(".position" + ha + (j - 1));
    if (matrica[i][j] === 12) {
      if (matrica[ha][j - 1] < 7) {
        if (i === 7) {
        } else {
          allowedFields.push({ i: ha, j: j - 1 });
          allowMove.classList.add("colorField");
        }
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i, j });
    }
  }

  let hb = i + 1;
  if (hb === 8) {
    hb = 7;
  }
  if (matrica[hb][j + 1] !== 0) {
    const allowMove = document.querySelector(".position" + hb + (j + 1));
    if (matrica[i][j] === 12) {
      if (matrica[hb][j + 1] < 7) {
        if (i === 7) {
        } else {
          allowedFields.push({ i: hb, j: j + 1 });
          allowMove.classList.add("colorField");
        }
      }
    } else {
      allowMove.classList.add("colorField");
      allowedFields.push({ i, j });
    }
  }

  return allowedFields;
}


function addClickListenerToField(listener, i, j, ...params) {
  const field = document.querySelector(".position" + i + j);
  field.addEventListener("click", () => {
    listener(i, j, ...params);
  });
}

function onFieldClick(i, j) {
  loadChess();
  const field = document.querySelector(".position" + i + j);
  field.classList.add("colorField");
  let gameQueueWhite = true;
  let gameQueueBleck = false;

  if (playBlack) {
    if (matrica[i][j] === 1) {
      const freeFields = getRockFreeFields(i, j);

      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 1);
      }
    }


    if (matrica[i][j] === 4) {
      const freeFields = getBlackQueenFreeFields(i, j);

      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 4);
      }
    }

    if (matrica[i][j] === 3) {
      const freeFields = getBlackBishopFreeFields(i, j);

      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 3);
      }
    }

    if (matrica[i][j] === 5) {
      const freeFields = getBlackKingFreeFields(i, j);

      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 5);
      }
    }

    if (matrica[i][j] === 2) {
      const freeFields = getBlackKnightFreeFields(i, j);

      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 2);
      }
    }
    if (matrica[i][j] === 6) {
      const freeFields = getBlackPawnFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 6);
      }
    }
  }
  if (playWhite) {

    if (matrica[i][j] === 7) {
      const freeFields = getWhiteRockFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 7);
      }
    }

    if (matrica[i][j] === 10) {
      const freeFields = getWhiteQueenFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 10);
      }
    }


    if (matrica[i][j] === 9) {
      const freeFields = getWhiteBishopFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 9);
      }
    }

    if (matrica[i][j] === 11) {
      const freeFields = getWhiteKingFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 11);
      }
    }

    if (matrica[i][j] === 8) {
      const freeFields = getWhiteKnightFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 8);
      }
    }
    if (matrica[i][j] === 12) {
      const freeFields = getWhitePawnFreeFields(i, j);
      for (const obj of freeFields) {
        addClickListenerToField(move, obj.i, obj.j, i, j, 12);
      }
    }
  }
}


function move(b, c, i, j, figure) {
  matrica[i][j] = 0;
  matrica[b][c] = figure;

  if (playWhite) {
    playWhite = false;
    playBlack = true;
  } else {
    playWhite = true;
    playBlack = false;
  }
  loadChess();
}

function showFigure(i, j, field) {
  if (matrica[i][j] === 1) {
    let blackRook = document.createElement("img");
    blackRook.setAttribute("src", "figure sah/BlackRook.png");
    blackRook.setAttribute("width", "70px");
    blackRook.setAttribute("height", "70px");
    field.appendChild(blackRook);
  }
  if (matrica[i][j] === 2) {
    let blackKnight = document.createElement("img");
    blackKnight.setAttribute("src", "figure sah/BlackKnight.png");
    blackKnight.setAttribute("width", "70px");
    blackKnight.setAttribute("height", "70px");
    field.appendChild(blackKnight);
  }
  if (matrica[i][j] === 3) {
    let blackBishop = document.createElement("img");
    blackBishop.setAttribute("src", "figure sah/BlackBishop.png");
    blackBishop.setAttribute("width", "70px");
    blackBishop.setAttribute("height", "70px");
    field.appendChild(blackBishop);
  }
  if (matrica[i][j] === 4) {
    let blackQueen = document.createElement("img");
    blackQueen.setAttribute("src", "figure sah/BlackQueen.png");
    blackQueen.setAttribute("width", "70px");
    blackQueen.setAttribute("height", "70px");
    field.appendChild(blackQueen);
  }
  if (matrica[i][j] === 5) {
    let blackKing = document.createElement("img");
    blackKing.setAttribute("src", "figure sah/BlackKing.png");
    blackKing.setAttribute("width", "70px");
    blackKing.setAttribute("height", "70px");
    field.appendChild(blackKing);
  }
  if (matrica[i][j] === 6) {
    let blackPawn = document.createElement("img");
    blackPawn.setAttribute("src", "figure sah/BlackPawn.png");
    blackPawn.setAttribute("width", "70px");
    blackPawn.setAttribute("height", "70px");
    field.appendChild(blackPawn);
  }
  if (matrica[i][j] === 7) {
    let whiteRook = document.createElement("img");
    whiteRook.setAttribute("src", "figure sah/WhiteRook.png");
    whiteRook.setAttribute("width", "70px");
    whiteRook.setAttribute("height", "70px");
    field.appendChild(whiteRook);
  }
  if (matrica[i][j] === 8) {
    let whiteKnight = document.createElement("img");
    whiteKnight.setAttribute("src", "figure sah/WhiteKnight.png");
    whiteKnight.setAttribute("width", "70px");
    whiteKnight.setAttribute("height", "70px");
    field.appendChild(whiteKnight);
  }
  if (matrica[i][j] === 9) {
    let whiteBishop = document.createElement("img");
    whiteBishop.setAttribute("src", "figure sah/WhiteBishop.png");
    whiteBishop.setAttribute("width", "70px");
    whiteBishop.setAttribute("height", "70px");
    field.appendChild(whiteBishop);
  }
  if (matrica[i][j] === 10) {
    let whiteQueen = document.createElement("img");
    whiteQueen.setAttribute("src", "figure sah/WhiteQueen.png");
    whiteQueen.setAttribute("width", "70px");
    whiteQueen.setAttribute("height", "70px");
    field.appendChild(whiteQueen);
  }
  if (matrica[i][j] === 11) {
    let whiteKing = document.createElement("img");
    whiteKing.setAttribute("src", "figure sah/WhiteKing.png");
    whiteKing.setAttribute("width", "70px");
    whiteKing.setAttribute("height", "70px");
    field.appendChild(whiteKing);
  }
  if (matrica[i][j] === 12) {
    let whitePawn = document.createElement("img");
    whitePawn.setAttribute("src", "figure sah/WhitePawn.png");
    whitePawn.setAttribute("width", "70px");
    whitePawn.setAttribute("height", "70px");
    field.appendChild(whitePawn);
  }
}
