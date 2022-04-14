let placeContainer = document.querySelector(".place-container");
let id = 0;
for (let i = 1; i <= 8; i++) {
  let elBoardBorder = document.createElement("div");
  elBoardBorder.classList.add("d-flex");
  elBoardBorder.classList.add("rows");
  placeContainer.appendChild(elBoardBorder);
  if (i % 2 == 1) {
  }
  for (let j = 1; j <= 8; j++) {
    id++;
    let elBoardPlace = document.createElement("div");
    elBoardPlace.id = id;
    elBoardPlace.classList.add("card");
    elBoardBorder.appendChild(elBoardPlace);
  }
  console.log(elBoardBorder);
}

let places = placeContainer.querySelectorAll(".card");

arr.forEach((element, index) => {
  places.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (item.id == element.id) {
        let x = document.querySelector(".x");
        let y = document.querySelector(".y");
        x.innerHTML = `= ${element.x}`;
        y.innerHTML = `= ${element.y}`;
        item.classList.add('ston_selected')
      }
    });

    item.addEventListener("mouseout", (e) => {
      if (item.id == element.id) {
        let x = document.querySelector(".x");
        let y = document.querySelector(".y");
        x.innerHTML = "";
        y.innerHTML = "";
        item.classList.remove('ston_selected')
      }
    });
  });
});

// ?Click to the stones

let stons = document.querySelectorAll(".stone");

stons.forEach((item) => {
  item.addEventListener("click", () => {
    stons.forEach(element => {
      element.classList.remove('ston_selected')
    })
    item.classList.add('ston_selected')
  });
});
