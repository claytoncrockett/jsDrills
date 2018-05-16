var display = ""
function romanNumeral(num){
  var total = num
  if (total > 1000){
    
    var x = Math.floor(num/1000)
    for (var i = x; i > 0; i--){
      display += "M"
    }
    total -= (x*1000)
  }
  if (total >= 900){
    display += "CM"
    total -= 900
  } else if (total >= 500){
    display += "D"
    total -= 500
  }
  if (total >= 400){
    display += "CD"
    total -= 400
  } else if (total >= 100){
    var y = Math.floor(total/100)
    for (var j = y; j > 0; j--){
      display += "C"
    }
    total -= (y*100)
  }
  if (total >= 90){
    display += "XC"
    total -= 90
  } else if (total >= 50){
    display += "L"
    total -= 50
  }
  if (total >= 40){
    display += "XL"
    total -= 40
  } else if (total >= 10){
    var z = Math.floor(total/10)
    for (var k = z; k > 0; k--){
      display += "X"
    }
    total -= (z*10)
  }
  if (total == 9){
    display += "IX"
    total -= 9
  } else if (total >= 5){
    display += "V"
    total -= 5
  }
  if (total == 4){
    display += "IV"
    total -= 4
  } else if (total >= 1){
    var q = total
    for (var l = total; l > 0; l--){
      display += "I"
    }
    total -= q
  }
    
  
  return display
}

romanNumeral(2561)
console.log(display)
