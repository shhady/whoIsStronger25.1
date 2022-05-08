// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

//-----------------------------------------------------------------

//!!! 1)
// getStrength(); returns undefined, as it is not bound and it's not refering to the first object

//!!! 2)
const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
// console.log(hero.getStrength());
const heroo = hero.getStrength.bind(hero);

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(heroo));
