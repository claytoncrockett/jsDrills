function countVowels(word){
  var vowelCount = 0;
  for(i=0;i<word.length;i++){
    if (word.charAt(i).toUpperCase() === 'E'|| 
        word.charAt(i).toUpperCase() ==='O' || 
        word.charAt(i).toUpperCase() ==='I' || 
        word.charAt(i).toUpperCase() ==='U' || 
        word.charAt(i).toUpperCase() ==='A'){
    vowelCount++;
    }
  }
  return vowelCount
}