const mainDiv = document.getElementById("main-grid");

const createSky = (count) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("map-tile", "sky");
    mainDiv.appendChild(div);
  }
};

const createGrass = (count) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("map-tile", "grass");
    mainDiv.appendChild(div);
  }
};

const createTree = (count) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("map-tile", "tree");
    mainDiv.appendChild(div);
  }
};

const createStone = (count) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("map-tile", "stone");
    mainDiv.appendChild(div);
  }
};

const createMap = () => {
  createSky(2);
  createTree(1);
  createSky(14);
  createTree(1);
  createSky(2);

  createSky(1);
  createTree(3);
  createSky(12);
  createTree(3);
  createSky(1);

  createSky(1);
  createTree(3);
  createSky(12);
  createTree(3);
  createSky(1);

  createSky(2);
  createTree(1);
  createSky(14);
  createTree(1);
  createSky(2);

  createStone(7);
  createTree(1);
  createStone(4);
  createTree(1);
  createStone(7);

  createStone(6);
  createTree(3);
  createStone(2);
  createTree(3);
  createStone(6);

  createStone(6);
  createTree(3);
  createStone(2);
  createTree(3);
  createStone(6);

  createStone(7);
  createTree(1);
  createStone(4);
  createTree(1);
  createStone(7);
};

createMap();

const grassElement = document.querySelector(".grass");
if (grassElement) {
  grassElement.addEventListener("click", () => {
    mainDiv.addEventListener("click", (event) => {
      event.target.classList.remove("stone", "tree", "sky");
      event.target.classList.add("grass");
    });
  });
}

const stoneElement = document.querySelector(".stone");
if (stoneElement) {
  stoneElement.addEventListener("click", () => {
    mainDiv.addEventListener("click", (event) => {
      event.target.classList.remove("grass", "tree", "sky");
      event.target.classList.add("stone");
    });
  });
}

const treeElement = document.querySelector(".tree");
if (treeElement) {
  treeElement.addEventListener("click", () => {
    mainDiv.addEventListener("click", (event) => {
      event.target.classList.remove("grass", "stone", "sky");
      event.target.classList.add("tree");
    });
  });
}

const skyElement = document.querySelector(".sky");
if (skyElement) {
  skyElement.addEventListener("click", () => {
    mainDiv.addEventListener("click", (event) => {
      event.target.classList.remove("grass", "tree", "stone");
      event.target.classList.add("sky");
    });
  });
}

const tiles = document.querySelectorAll(".map-tile.hov");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    tiles.forEach((t) => t.classList.remove("selected"));
    tile.classList.add("selected");
  });
});

const exit = document.getElementById("exit");

exit.addEventListener("click", () => {
  window.location.href = "../index.html";
});
