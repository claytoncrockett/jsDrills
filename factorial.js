function factorial(num){
  var total = 1
  for (var i = num; i > 0; i--){
    total *= i
  }
  return total
}