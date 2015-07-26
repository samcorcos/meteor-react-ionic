if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'Sam',
    password: 'password'
  })
}

console.log(Meteor.users.find().count());
