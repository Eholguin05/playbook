import Traveler from './traveler.js'

// This is an example of how to modularize classes and use them through modules

const traveler = new Traveler("Javier", "LaunchX", "Node JS", "Abril 2022")
console.log(traveler)
console.log(traveler.getNameAndUsername()) // Parent class method
console.log(traveler.getGeneralInfo()) // Child class method
