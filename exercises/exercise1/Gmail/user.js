const user = {
  name: "Emmanuel Holguin",
  email: "e.holguin0550@gmail.com",
  createdDate: "18/11/2005",
  emailsSent: 22,
  emailsReceived: 23,
  getTotalEmails: function () {
    return this.emailsSent + this.emailsReceived;
  },
  getGeneralInfo: function () {
    return `The e-mail ${this.email} was created on ${this.createdDate}`;
  },
};

console.log(`Username: ${user.name}`);
console.log("Total emails sent and received " + user.getTotalEmails());
console.log(user.getGeneralInfo());
