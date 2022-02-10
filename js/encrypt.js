function encrypt() {
    var writtenText = input.value;
    var encryptedText = " "
  
    for (var i = 0; i < writtenText.length; i++) {
      var vowel = writtenText[i]
      if (vowel == "a") {
        vowel = "ai"
        encryptedText += vowel
      } else if (vowel == "e") {
        vowel = "enter"
        encryptedText += vowel
      } else if (vowel == "i") {
        vowel = "imes"
        encryptedText += vowel
      } else if (vowel == "o") {
        vowel = "ober"
        encryptedText += vowel
      } else if (vowel == "u") {
        vowel = "ufat"
        encryptedText += vowel
      } else {
        encryptedText += vowel
      }
    }
    return output.value = encryptedText;
  }