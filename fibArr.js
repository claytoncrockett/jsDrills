var fibArr = [1,1]
function fib(num){
  for (var i = 2; i < num; i++){
    fibArr[i] = (fibArr[i-1] + fibArr[i-2])
  }
  return fibArr[num-1]
}