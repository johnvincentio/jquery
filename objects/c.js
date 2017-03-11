
var pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22
};

console.log(Object.keys(pageViewCounts));

Object.keys(pageViewCounts).forEach(function(key){
  console.log(
    'the `' + key + '` page has ' + pageViewCounts[key] +
    ' views.'
  );
})


