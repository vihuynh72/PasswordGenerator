const characters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const numbers = ['0','1','2','3','4','5','6','7','8','9'];

const symbols = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
  "'", '"', ',', '<', '.', '>', '/', '?', '|', '`', '~'
];

function randomCharacter(inputArray) {
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}

function randomNum() {
    return Math.floor(Math.random() * 3) + 1
}

function randomPassword() {
    let password = ""

    for (let i = 0; i < 15;  ++i) {
        let randomIndex = randomNum()
        if (randomIndex === 1) {
            password += randomCharacter(characters)
        } else if (randomIndex === 2) {
            password += randomCharacter(numbers)
        } else {
            password += randomCharacter(symbols)
        }
    }

    return password
}

let passwordEl1 = document.querySelector("#password-1")
let passwordEl2 = document.querySelector("#password-2")

function fillPassword() {
    passwordEl1.textContent = randomPassword()
    passwordEl2.textContent = randomPassword()
}