// Example 5: Attributes with default values
class PullRequest {
  constructor(repo, title, linesChanged) {
    this.repo = repo;
    this.title = title;
    this.linesChanged = linesChanged;
    this.status = "OPEN";
    this.dateCreated = new Date(); // Attribute with the date of the instantiation
  }

  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
  }
}

console.log("Example 5: Attributes with default values");
const myPR1 = new PullRequest("LaunchX", "My first PR", 100);
console.log(myPR1.getInfo());

// You can create multiple instances of the same object
const myPR2 = new PullRequest("LaunchX", "My second PR", 99);
console.log(myPR2.getInfo());
