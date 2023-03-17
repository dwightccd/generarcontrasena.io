// Genera una contraseña aleatoria
function generatePassword() {
  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[{]};:<>|./?";
  var password = "";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }
  document.getElementById("password").value = password;

}

// Copia la contraseña al portapapeles
function copyPassword() {
  var password = document.getElementById("password");
  var range = document.createRange();
  range.selectNode(password);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Contraseña copiada al portapapeles: " + password.textContent);
}

// Carga el diccionario de palabras desde un archivo
function loadDictionary(callback) {
  var request = new XMLHttpRequest();
  request.open("GET", "words.txt");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var words = request.responseText.split("\n");
      callback(words);
    }
  };
  request.send();
}

// Genera una contraseña aleatoria basada en un diccionario de palabras
function generateDictionaryPassword() {
  loadDictionary(function(words) {
    var word = words[Math.floor(Math.random() * words.length)];
    var firstLetter = word.charAt(0).toUpperCase();
    var randomNumber1 = Math.floor(Math.random() * 10);
    var randomNumber2 = Math.floor(Math.random() * 10);
    var password = firstLetter + word.slice(1) + randomNumber1 + randomNumber2;
    document.getElementById("password").value = password;

  });
}
