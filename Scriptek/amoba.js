
function LoadAmoba() {

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      document.getElementById("test").innerHTML += "<div class='mezo'></div>";
    }
  }

  let mezok = document.querySelectorAll(".mezo");

  mezok.forEach((egy) => {
    egy.addEventListener("click", Katt);
  });
}

addEventListener("load", () => {});

let ki = false;

function Katt(egy) {
  if (egy.target.innerHTML == "" && !ki) {
    egy.target.innerHTML = "X";
    document.getElementById("jon").innerHTML = "Jön: O";
    ki = true;
  } else if (egy.target.innerHTML == "" && ki) {
    egy.target.innerHTML = "O";
    document.getElementById("jon").innerHTML = "Jön: X";
    ki = false;
  }
  let nyert = Nyert();
  if (nyert != undefined) {
    document.getElementById("nyert").innerText = "Nyertes: " + nyert;
  }
}

function Nyert() {
  let mezok = document.querySelectorAll(".mezo");
  table = [];
  let seged = 0;
  for (let i = 0; i < 10; i++) {
    sor = [];
    for (let j = 0; j < 10; j++) {
      sor.push(mezok[seged]);
      seged++;
    }
    table.push(sor);
  }

  let X = 0;
  let O = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      switch (table[i][j].innerHTML) {
        case "X":
          X++;
          O = 0;
          break;

        case "O":
          O++;
          X = 0;
          break;
        default:
          O = 0;
          X = 0;
          break;
      }
      if (X >= 5) {
        return "X";
      } else if (O >= 5) {
        return "O";
      }
    }
  }

  let X2 = 0;
  let O2 = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      switch (table[j][i].innerHTML) {
        case "X":
          X2++;
          O2 = 0;
          break;

        case "O":
          O2++;
          X2 = 0;
          break;
        default:
          O2 = 0;
          X2 = 0;
          break;
      }
      if (X2 >= 5) {
        return "X";
      } else if (O2 >= 5) {
        return "O";
      }
    }
  }
}

LoadAmoba();