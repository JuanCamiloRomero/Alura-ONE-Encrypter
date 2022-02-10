function decrypt(){
    var writtenText = input.value;
    var decryptedText = writtenText.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    return output.value = decryptedText;
}