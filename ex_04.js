function capitalizee(words) {
  let majWord = []
  words.forEach(words => {
    majWord.push(words.toUpperCase())
  })
  return majWord
}

console.log(capitalizee(["monstre", "double monstre"]))
