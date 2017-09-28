// var names = ['sumit','sitesh','stark'];
//
// names.forEach(function(name){
//   console.log('my name is '+ name);
// });
//
// names.forEach((name) => {
//   console.log("your name is " + name);
// })

// var returnMe = (name) =>name + "!";
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();
var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(3,4));

var addExpression = (a,b) => a+b;
console.log(addExpression(3,-4));
