



const splitter = (words, splitter) => {
  let newArray = [""]
  let index = 0
  for(let char of words){
    if(char === splitter){
      index ++
      newArray.push("")
    }else {
      newArray[index] += char
    }
  }
  return newArray
}

module.exports = splitter
