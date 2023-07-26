
const elements = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H'
  , 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z']
let result = ''

const passwordGenerator = (length) => {
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * elements.length)
    const element = elements[randomNumber]
    result += element
  }

  console.log(result)
}

passwordGenerator(process.argv[2])
