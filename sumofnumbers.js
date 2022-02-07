let testList = [1, 2, 3, 4];

function sumFor(list){
  let tot = 0;
  for (let x = 0; x < list.length; x++){
    tot += list[x];
  }
  return tot;
}
console.log(sumFor(testList));

function sumWhile(list){
  let tot = 0;
  let i = 0;
  while (i < list.length){
    tot += list[i];
    i++;
  }
  return tot;
}
console.log(sumWhile(testList));

function sumRecursion(list){
  //Base case
  if (list.length === 0){
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
console.log(sumRecursion(testList));

function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, nums){return memo + nums;}, 0);
}
console.log(sumTheSimpleWay(testList));