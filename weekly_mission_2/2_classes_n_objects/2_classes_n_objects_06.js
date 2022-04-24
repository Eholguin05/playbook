// Example 7: Setters to assign value to an object's attributes
class MissionCommander {
  constructor(name, mission) {
    this.name = name;
    this.mission = mission;
    this.students = 0;
    this.lives = 0;
  }

  get getStudents() {
    return this.students;
  }

  get getLives() {
    return this.lives;
  }

  set setStudents(students) {
    this.students = students;
  }

  set setLives(lives) {
    this.lives = lives;
  }
}

console.log("Example 7: Setters to assign value to an object's attributes");
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS");

console.log(missionCommanderNode.getStudents); // default value 0
console.log(missionCommanderNode.getLives); // default value 0

// Updating the values with the setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;

console.log(missionCommanderNode.getStudents);
console.log(missionCommanderNode.getLives);
