
var users = [
  {
    name: 'Bernard',
    age: 29,
    birthMonth: 'April'
  },
  {
    name: 'Bernice',
    age: 14,
    birthMonth: 'December'
  },
  {
    name: 'Gerard',
    age: 88,
    birthMonth: 'June'
  },
  {
    name: 'Stella',
    age: 3,
    birthMonth: 'September'
  }
];

users.forEach(function(user) {
  console.log(
    user.name + ' will be ' + (user.age + 1) + ' in ' +
    user.birthMonth
  );
});

