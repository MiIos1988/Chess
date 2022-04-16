let matrica = [
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
];
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
      // console.log(i,j)
      field.addEventListener("click", () => {
        moveFigure(i, j, field);
      });
    }
  }
}

loadChess();

function moveFigure(i, j, field) {
  // console.log(i, j, field)
  let blueField = document.querySelectorAll(".field");
  for (const allBlueField of blueField) {
    allBlueField.classList.remove("colorField");
  }
  field.classList.add("colorField");
  loadChess();

  // CRNI TOP   *************************************************
  if (matrica[i][j] === 1 && field.classList.contains("colorField")) {
    for (let a = 0; a <= i; a++) {
      console.log(i)
      let allowMove = document.querySelector(".position" + a + j);
      allowMove.classList.add("colorField");
      allowMove.addEventListener("click", () => {
        moveRook(a, j, i, j, field, allowMove);
      });

      if (field.classList.contains("darkFigure")) {
        let allDarkFigure = document.querySelectorAll(".darkFigure");
        for (const blockDarkFigure of allDarkFigure) {
          blockDarkFigure.classList.remove("colorField");
        }
        allowMove.classList.add("colorField");
      }
    }

    for (let a = 7; a >= i; a--) {
      let allowMove = document.querySelector(".position" + a + j);
      allowMove.classList.remove("colorField");
      allowMove.classList.add("colorField");

      allowMove.addEventListener("click", () => {
        console.log(allowMove);
        moveRook(a, j, i, j, field, allowMove);
      });

      if (field.classList.contains("darkFigure")) {
        let allDarkFigure = document.querySelectorAll(".darkFigure");
        for (const blockDarkFigure of allDarkFigure) {
          blockDarkFigure.classList.remove("colorField");
        }
        allowMove.classList.add("colorField");
      }
    }

    for (let a = 0; a <= j; a++) {
      let allowMove = document.querySelector(".position" + i + a);
      allowMove.classList.remove("colorField");
      allowMove.classList.add("colorField");

      allowMove.addEventListener("click", () => {
        moveRook(i, a, i, j, field, allowMove);
        // console.log(i, a, i, j);
      });

      if (field.classList.contains("darkFigure")) {
        let allDarkFigure = document.querySelectorAll(".darkFigure");
        for (const blockDarkFigure of allDarkFigure) {
          blockDarkFigure.classList.remove("colorField");
        }
        allowMove.classList.add("colorField");
      }
    }

    for (let a = 7; a >= j; a--) {
      let allowMove = document.querySelector(".position" + i + a);
      allowMove.classList.remove("colorField");
      allowMove.classList.add("colorField");

      allowMove.addEventListener("click", () => {
        moveRook(i, a, i, j, field, allowMove);
      });

      if (field.classList.contains("darkFigure")) {
        let allDarkFigure = document.querySelectorAll(".darkFigure");
        for (const blockDarkFigure of allDarkFigure) {
          blockDarkFigure.classList.remove("colorField");
        }
        allowMove.classList.add("colorField");
      }
    }
    //*************************************************************************** */
  }
}
//Kretanje crnog topa**************************************************************
function moveRook(b, c, i, j, field, allowMove) {
  if (allowMove.classList.contains("darkFigure") === false) {
    // console.log(b, c, i, j)
    matrica[i][j] = 0;
    matrica[b][c] = 1;

    loadChess();
  }
}

//Slike figura************************************************************************
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
