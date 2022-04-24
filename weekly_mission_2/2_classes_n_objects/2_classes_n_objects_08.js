// Example  9: Inheritance between two classes, this allow us to link classes between them and reutilize their components
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Example  9: Inheritance between two classes")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

// extends is the reserved word to indicate the properties of the parent class (Developer) of which the properties will be inherited from
class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // Reuse of the getter from the parent class
