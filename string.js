function stringLength(string) {
  if(string.length >= 1 && string.length <= 10){
    return string.length;
  } else{
    throw('Out of range');
  }
}

module.exports = stringLength;