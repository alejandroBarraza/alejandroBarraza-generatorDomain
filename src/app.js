/* eslint-disable */

function app() {
  let pronoun = ['the', 'our']
  let adj = ['great', 'big']
  let noun = ['jogger', 'racoon']
  let domain = ['com', 'us', 'cl']

  for (const p of pronoun) {
    for (const a of adj) {
      for (const n of noun) {
        for (const d of domain) {
          console.log(`${p}${a}${n}.${d}`)
        }
      }
    }
  }
}

app()
