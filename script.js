function isIsogram(str){
let lowerCaseStr = str.toLowerCase();
  let strArr = lowerCaseStr.split('');
  let isIsogramsContains = strArr.filter((element,index) => strArr.indexOf(element) !== index);
  if (isIsogramsContains.length>0){
    return false
  }
  else {
    return true
  }
}
console.log(isIsogram("moOse"));
