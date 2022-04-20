const profile = {
  user: "Emmanuel Holguin",
  cellphoneNumber: "871 121 7105",
  age: 32,
  totalTravelTimeMinutes: 120,
  getUserAndAge: function () {
    return `User: ${this.user}, age: ${this.age}`
  },
  getGeneralInfo: function () {
    const hours = Math.floor(this.totalTravelTimeMinutes / 60);
    const minutes = this.totalTravelTimeMinutes % 60;
    return `Total traveled time: ${hours} hours and ${minutes} minutes`
  },
};

console.log(profile.getUserAndAge());
console.log(`User's cellphone: ${profile.cellphoneNumber}`);
console.log(profile.getGeneralInfo());
