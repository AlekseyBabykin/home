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
export default createMap;
