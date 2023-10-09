// console.log('abcde') // true
// console.log('abb') // false

const checkVariable = (huruf) => {
  let output = false
  for(let i = 0; i < huruf.length; i++) {
    if (huruf[i] !== huruf[i-1]) {
      output = true
    } else {
      output = false
    }
  }
  console.log({output})
}
checkVariable('abcc')