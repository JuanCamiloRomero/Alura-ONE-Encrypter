function validate() {
    var text = input.value
    var symbol = /[^\s*a-z]/g
    var result = symbol.test(text)
  
    if (result == false) {
      encrypt()
    }
}