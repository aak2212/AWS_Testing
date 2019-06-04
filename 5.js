function square(x){
  return x*x;
}

function cube(x) {
  return x*x*x;
}

function sqAdd(x,y){
  return square(x) + square(y);
}

function magic(p){
  if(p%2 == 0) {
    return p*p;
  }
  else {
    return p*5;
  }
}

function getMagic(q) {
  return magic(p);
}

export {square,cube, sqAdd, getMagic};
