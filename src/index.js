module.exports = function check(str, bracketsConfig) {
  let arr = [];
   for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if(str.charAt(i) == bracketsConfig[j][0] && str.charAt(i) != bracketsConfig[j][1]) {
        arr.push(str.charAt(i));
        continue;
      }
      else if(str.charAt(i) == bracketsConfig[j][1] && arr[arr.length - 1] == bracketsConfig[j][0] && str.charAt(i) != bracketsConfig[j][0] ) {
        arr.pop();
        continue;
      }
      else if(str.charAt(i) == bracketsConfig[j][1] && arr[arr.length - 1] != bracketsConfig[j][0] && str.charAt(i) != bracketsConfig[j][0] ) {
        return false
      }
      else if(str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) == bracketsConfig[j][0] && arr.indexOf(str.charAt(i))  === -1 ) {
          arr.push(str.charAt(i));
          continue;    
      }
      else if(str.charAt(i) == bracketsConfig[j][1] && str.charAt(i) == bracketsConfig[j][0] && arr.indexOf(str.charAt(i))  >= 0 && arr[arr.length - 1] === str.charAt(i) ) {
        arr.pop();
        continue;
      }
      else  {
         continue
      }
      
    }
  }
  if(arr.length == 0 ) {
    return true
  }

  return false
  
}
