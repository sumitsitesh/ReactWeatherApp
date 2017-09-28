// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Bangalore').then(function(temp){
//   console.log('promise success',temp);
// },function(err){
// console.log('promise error',err);
// })

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('A & b need to be numbers');
    }
  });
}

addPromise(2,3).then(function(sum){
  console.log('success', sum);
},function(err){
  console.log('error', err);
});

addPromise('sumit',9).then(function(sum){
  console.log('this should no t appear');
},function(err){
  console.log('this should appear', err);
});
