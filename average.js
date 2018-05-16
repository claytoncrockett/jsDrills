var arr = [1,3,5,7,9,11]
var total = 0
function average(arr){
  for(i=0;i<arr.length;i++){
    total += arr[i]
  } 
  var number = arr.length
  return total/number
}
console.log(average(arr))