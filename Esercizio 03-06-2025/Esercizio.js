

const Funzione = (a, b) => {
  if (a === 50 || b === 5 || a + b === 50) {
    return true
  } else return false
}


const Carattere = (stringa, posizione) => {
  let arrDiLettere = stringa.split("")
  arrDiLettere.splice(posizione, 1)
  return arrDiLettere.join("")
}


const Compresi = (a, b) => {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return true
  } else return false
}


const ControllaCitta = (nomeCitta) => {
  return nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")
}


const CalcolaSomma = (arr) => {
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    temp += element
  }
  return temp
  
}


const non1e3 = (arr) => {
  return !arr.includes(1) && !arr.includes(3)
}


const Angoli = (deg) => {
  if (deg < 90) return "acuto"
  if (deg > 90 && deg < 180) return "ottuso"
  if (deg === 90) return "retto"
  if (deg === 180) return "piatto"
}


const Acronimo = (frase) => {
  let arrayParole = frase.split(" ")
  let temp = ""
  for (let i = 0; i < arrayParole.length; i++) {
    const parola = arrayParole[i]
    temp += parola.charAt(0)
  }
  return temp.toUpperCase()
}
