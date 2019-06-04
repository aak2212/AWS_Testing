function add(a,b,c,...tail){
  console.log(tail);
  return a+b+c;
}

var list = [5,6,8,9,10];

console.log(add(...list));

function makeList(...list){
  return list;
}

console.log(makeList(1,2));
console.log(makeList(1,2,4,5,6));
