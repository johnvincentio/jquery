
/* factory function */

function mammal(name, numEyes) {
  return {
    name: name,
    isWarmblooded: true,
    numEyes: numEyes,
    evolve: function() {
      console.log(
        "I'm not mutating, I'm evolving.");
      this.numEyes ++;
    },
    explainYourSelf: function() {
      console.log(
        "I'm just a " + this.name + " with " +
        this.numEyes + " eye(s). Nothing to see here."
      );
    }
  };
}

var tiger = mammal('tiger', 2);
tiger.explainYourSelf();
tiger.evolve();
tiger.explainYourSelf();

var oneEyedBadger = mammal('badger', 1);
oneEyedBadger.explainYourSelf();

