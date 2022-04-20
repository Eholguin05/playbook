export default class PullRequest {
  constructor(
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated
  ) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }

  getStatus() {
    return this.status;
  }

  getGeneralInfo() {
    return `PullRequest on branch ${this.branchName} created on ${this.dateCreated}`;
  }
}
