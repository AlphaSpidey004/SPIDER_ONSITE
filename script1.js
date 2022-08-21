const range = document.getElementById('characterAmountRange')
const charnum = document.getElementById('characterAmountNumber')
const upele = document.getElementById('includeUppercase')
const numele = document.getElementById('includeNumbers')
const symbele = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const pwd = document.getElementById('passwordDisplay')

const UPPERCASE = arrayFromLowToHigh(65, 90)
const lowercase = arrayFromLowToHigh(97, 122)
const num = arrayFromLowToHigh(48, 57)
const symbols = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

charnum.addEventListener('input', syncCharacterAmount)
range.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = charnum.value
  const includeUppercase = upele.checked
  const includeNumbers = numele.checked
  const includeSymbols = symbele.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  pwd.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercase
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE)
  if (includeSymbols) charCodes = charCodes.concat(symbols)
  if (includeNumbers) charCodes = charCodes.concat(num)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  charnum.value = value
  range.value = value
}