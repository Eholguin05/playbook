import Repo from "./repo.js";
import Issue from "./issue.js";
import PullRequest from "./pull_request.js";

const repo = new Repo(
  "MissionNodeJS",
  "LaunchX-InnovaccionVirtual",
  ["JavaScript"],
  39,
  540,
  0,
  5,
  0,
);

console.log("------REPO------");
console.log(`Repository ${repo.name}`);
console.log(`Total issues: ${repo.getTotalIssues()}`);
console.log(repo.getGeneralInfo());


const issue = new Issue(
  "☘️ 06 Live 3 Semana 2 [Jueves 14 de Abril]",
  "MissionNodeJS",
  "Open",
  26,
  ["LIVE 3", "PRÓXIMO LIVE", "Semana-2"],
  "carlogilmar",
  "14/04/2022",
  "14/04/2022"
);

console.log("------ISSUE------");
console.log("Issue's labels: " + issue.labels.join(", "));
const { title, author } = issue.getTitleAndAuthor();
console.log(`The issue ${title} was created by ${author}`);
console.log(issue.getGeneralInfo());


const pullRequest = new PullRequest(
  "Translation to english",
  "english-translation",
  "11/04/2022",
  "open",
  "MissionNodeJS"
);

console.log("------PULL REQUEST------");
console.log(`PullRequest's name: ${pullRequest.title}`);
console.log(`Status: ${pullRequest.getStatus()}`);
console.log(pullRequest.getGeneralInfo());
