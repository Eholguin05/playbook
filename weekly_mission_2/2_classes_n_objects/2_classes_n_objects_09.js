// Example 10: Methods override

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Traveler extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // super is a reserved word to call the parent class' constructor
    this.cycle = cycle // Create a new attribute exclusive to this class
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // Call the parent method
    // nameAndUsername is a local variable so it's no necessary to call it using this reserved word
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const traveler = new Traveler("Carlo", "LaunchX", "Node JS", "April 2022")
console.log("Example 10: Methods Override")
console.log(traveler)
console.log(traveler.getNameAndUsername()) // Parent class' method
console.log(traveler.getGeneralInfo()) // Child class' method
