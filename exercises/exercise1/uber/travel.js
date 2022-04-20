const travel = {
  from: "Torreon",
  to: "Gomez Palacio",
  timeMinutes: 35,
  distanceKm: 30.5,
  driver: "Eder Estrada",
  cost: 158,
  getLocationAndDestination: function() {
    return `From ${this.from} to ${this.to}`
  },
  getGeneralInfo: function() {
    return `Travel time: ${this.timeMinutes} mins, distance: ${this.distanceKm} km, cost: $${this.cost} MXN`;
  },
};

console.log(`Driver ${travel.driver}`);
console.log(travel.getLocationAndDestination());
console.log(travel.getGeneralInfo());
