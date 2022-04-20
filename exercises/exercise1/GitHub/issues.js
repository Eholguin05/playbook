const issue = {
  title: "MyIssue",
  repositoryNameAssociated: "MyRepo",
  status: "Answered",
  numberOfComments: 10,
  labels: ["bug", "help wanted", "question"],
  author: "Emmanuel Holguin",
  dateCreated: "24/02/2022",
  lastUpdated: "19/04/2022",
  getTitleAndAuthor: function () {
    return {
      title: this.title,
      author: this.author,
    };
  },
  getGeneralInfo: function () {
    return `Issue: ${this.title}, status: ${this.status}, last updated: ${this.lastUpdated}`;
  },
};

console.log("Issue's labels: " + issue.labels.join(", "));
const { title, author } = issue.getTitleAndAuthor();
console.log(`This issue ${title} was created by ${author}`);
console.log(issue.getGeneralInfo());
