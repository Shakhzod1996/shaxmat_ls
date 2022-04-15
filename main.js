let placeContainer = document.querySelector(".place-container");

for (let card of arr) {
  if (card.y % 2 == 0 && card.x % 2 == 0) {
    card.color = "dark";
  } 
  if (card.y % 2 != 0 && card.x % 2 != 0) {
    card.color = "dark";
  } 
}

for (let i of arr) {
  let card = document.createElement("div");
  card.classList.add(`y_${i.y}`, `x_${i.x}`, `card`, `${i.color}_color`);
  placeContainer.appendChild(card);
}
// ?Click to the stones
let stons = document.querySelectorAll(".stone");

let newStone = "";
stons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("king")) {
      newStone = "king";
    }

    if (e.target.classList.contains("queen")) {
      newStone = "queen";
    }

    if (e.target.classList.contains("castle")) {
      newStone = "castle";
    }

    if (e.target.classList.contains("bishop")) {
      newStone = "bishop";
    }

    if (e.target.classList.contains("knight")) {
      newStone = "knight";
    }

    if (e.target.classList.contains("pawl")) {
      newStone = "pawl";
    }

    stons.forEach((el) => {
      el.classList.remove("tosh-fixed-active");
    });

    e.target.classList.add("tosh-fixed-active");
  });
});

let places = placeContainer.querySelectorAll(".card");

for (let card of places) {
  card.addEventListener("mouseover", (e) => {
    let x = Number(e.target.classList[1].slice(-1));
    let y = Number(e.target.classList[0].slice(-1));

    let x1 = document.querySelector(".x");
    let y1 = document.querySelector(".y");

    x1.innerHTML = `x = ${x}`;
    y1.innerHTML = `y = ${y}`;

    for (let card of places) {
      card.classList.remove("help");
    }

    if (newStone == "king") {
      for (let card of places) {
        console.log(card);
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
        }
      }
    }

    if (newStone == "queen") {
      for (let card of places) {
        for (let i = 8; i >= 1; i--) {
          card.classList.contains(`y_${y}`) && card.classList.contains(`x_${i}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
        }
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${i}`) && card.classList.contains(`x_${x}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
        }
      }
    }

    if (newStone == "castle") {
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${i}`) && card.classList.contains(`x_${x}`)
            ? card.classList.add("help")
            : '';
        }
        for (let i = 8; i >= 1; i--) {
          card.classList.contains(`y_${y}`) && card.classList.contains(`x_${i}`)
            ? card.classList.add("help")
            : '';
        }
      }
    }

    if (newStone == "knight") {
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x + 2}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 2}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 2}`) &&
          card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + 1}`) &&
          card.classList.contains(`x_${x - 2}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x + 2}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x - 2}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 2}`) &&
            card.classList.contains(`x_${x - 1}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - 2}`) &&
          card.classList.contains(`x_${x + 1}`)
            ? card.classList.add("help")
            : '';
        }
      }
    }

    if (newStone == "bishop") {
      for (let card of places) {
        for (let i = 8; i >= 1; i--) {
          card.classList.contains(`y_${y - i}`) &&
          card.classList.contains(`x_${x - i}`)
            ? card.classList.add("help")
            : '';
        }
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${y + i}`) &&
          card.classList.contains(`x_${x + i}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y - i}`) &&
          card.classList.contains(`x_${x + i}`)
            ? card.classList.add("help")
            : '';
          card.classList.contains(`y_${y + i}`) &&
          card.classList.contains(`x_${x - i}`)
            ? card.classList.add("help")
            : '';
        }
      }
    }

    if (newStone == "pawl") {
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          card.classList.contains(`y_${y - 1}`) &&
          card.classList.contains(`x_${x}`)
            ? card.classList.add("help")
            : '';
          y == 8 ? card.classList.remove("help") : '';
        }
      }
    }
  });

  placeContainer.addEventListener("mouseout", (e) => {
    for (let card of places) {
      card.classList.remove("help");
      let x1 = document.querySelector(".x");
      let y1 = document.querySelector(".y");

      x1.innerHTML = "";
      y1.innerHTML = "";
    }
  });
}
