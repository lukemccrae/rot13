function rot13(message){
  var result = [];
  for (var i = 0; i < message.length; i++) {
    var lowCaseLetter = message[i].toLowerCase()
    if(lowCaseLetter == lowCaseLetter.toUpperCase()) {
      result.push(message[i])
      continue
    }
    var modifier = 13
    if(getNum(lowCaseLetter) >= 13) {
      modifier = -13
    }
    var number = getNum(lowCaseLetter)
    var rotLetter = getLetter(number + modifier)

    if(message[i] != message[i].toLowerCase()) {
      result.push(rotLetter.toUpperCase())
    } else {
      result.push(rotLetter)
    }
  }
  return result.join('')
}

console.log(rot13('.test!'));

function getNum(letter) {
  return letter.charCodeAt(0) - 97
}
function getLetter(num) {
  return String.fromCharCode(num + 97)
}
