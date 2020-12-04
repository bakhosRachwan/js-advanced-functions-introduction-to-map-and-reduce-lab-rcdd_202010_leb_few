function mapToNegativize(n){
  let mapped = n.map(elem => elem*(-1))
  return mapped
}
function mapToNoChange(w){
  let print = w.map(elem => elem)
  return print
}
function mapToDouble(d){
  let doubled = d.map(elem => elem*2)
  return doubled
}
function mapToSquare(s){
  let squared = s.map(elem => elem**2)
  return squared
}

function reduceToTotal(sourceArray, startingPoint=0){
  
  let sa = sourceArray.reduce((accumulator, currentValue) => { accumulator+currentValue}, startingPoint) 
  return sa
}