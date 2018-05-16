function rollDice(){
  dice1 = (Math.floor(Math.random() * 6)) + 1
  arr[0] = dice1
  dice2 = (Math.floor(Math.random() * 6)) + 1
  arr[1] = dice2
  return arr
}