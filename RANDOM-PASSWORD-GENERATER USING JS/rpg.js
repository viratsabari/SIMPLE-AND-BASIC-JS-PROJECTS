const input = document.querySelector('input');
const button = document.querySelector('button');
const charactersArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', // Lowercase letters
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/' // Special characters
];

button.addEventListener('click', () => {
  let rondamvalue = "";  
  const arrayLength = charactersArray.length;  
   input.value = "";
  for (let i = 0; i < 10; i++) {
  rondamvalue += charactersArray[ Math.floor(Math.random() * arrayLength)];
    
  }

 
  input.value = rondamvalue;
});


