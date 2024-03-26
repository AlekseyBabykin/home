function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`i choose you ${this.name}`);
};

Pokemon.prototype.attackMethod = function (oneParametr) {
  if (oneParametr >= 0 && oneParametr < this.attackList.length) {
    console.log(`${this.name} used ${this.attackList[oneParametr]}`);
  } else {
    console.log(
      `${this.name} does not have an attack with number ${oneParametr}`
    );
  }
};

const pikachu = new Pokemon("Pikachu", "Electric", [
  "Thunderbolt",
  "Quick Attack",
  "Iron Tail",
]);
const charmander = new Pokemon("Charmander", "Fire", [
  "Ember",
  "Scratch",
  "Flamethrower",
]);
const squirtle = new Pokemon("Squirtle", "Water", [
  "Water Gun",
  "Tackle",
  "Bubble Beam",
]);

pikachu.callPokemon();
pikachu.attackMethod(2);

charmander.callPokemon();
charmander.attackMethod(0);

squirtle.callPokemon();
squirtle.attackMethod(1);
