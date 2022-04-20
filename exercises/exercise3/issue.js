export default class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  getTitleAndAuthor() {
    return {
      title: this.title,
      author: this.author,
    };
  }

  getGeneralInfo() {
    return `Issue: ${this.title}, status: ${this.status}, last updated: ${this.lastUpdated}`;
  }
}
