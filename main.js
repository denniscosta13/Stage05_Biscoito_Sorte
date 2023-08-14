const cookieBtn = document.querySelector("#fortune-cookie")
const btnRetry = document.querySelector("#btnRetry")

const phraseElement = document.querySelector(".fortune-wrapper p")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")




// console.log

//events

cookieBtn.addEventListener('click', cookieFortunePhrase)
btnRetry.addEventListener('click', toggleScreen)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// function randomPhrasePicker(phrasesArray) {
//   let index = Math.round(Math.random() * phrasesArray.length)
//   return phrasesArray[index]
// }

function cookieFortunePhrase() {
  const cookiePhrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
  ]


  let index = Math.round(Math.random() * cookiePhrases.length)
  let phrase = cookiePhrases[index]

  phraseElement.innerText = phrase

  toggleScreen()

}