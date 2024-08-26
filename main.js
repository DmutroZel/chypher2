let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
}

function chypher(password, n = 3) {
    let chypherPassword = '';
    for (let i = 0; i < password.length; i++) {
        let currentIndex = alphabet.indexOf(password[i]);
        if (currentIndex + n <= alphabet.length - 1) {
            chypherPassword += alphabet[currentIndex + n];
        } else {
            chypherPassword += alphabet[n - (alphabet.length - currentIndex)];
        }
    }
    return chypherPassword;
}

function dechypher(password, n = 3) {
    let dechypherPassword = '';
    for (let i = 0; i < password.length; i++) {
        let currentIndex = alphabet.indexOf(password[i]);
        if (currentIndex - n > 0) {
            dechypherPassword += alphabet[currentIndex - n];
        } else {
            dechypherPassword += alphabet[alphabet.length - (n - currentIndex)]
        }

    }
    return dechypherPassword;
}

chypherBtn.onclick = function () {
    result.value = chypher(chypherText.value, parseInt(key.value));
}
dechypherBtn.onclick = function () {
    result.value = dechypher(chypherText.value, parseInt(key.value));
}








