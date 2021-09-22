const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
const updatedTutorials = tutorials.map(caseElement);
return updatedTutorials;
}


const caseElement = word => {
  let splitWords = word.split('');
  let casedSentence = "";
  for(word of splitWords){
    word = word.charAt(0).toUpperCase() + word.slice(1);
    casedSentence += word + ' '
  } 
  let removeEndSpace = casedSentence.slice(0, -1)
  return removeEndSpace
}

console.log(caseElement(tutorials))






//   let arr = string.map( s =>{
//    return s.split(' ');
//   })

//   for(let i = 0; i < arr.length; i++){
    
//     return arr[i].map( word =>{
//       return word.charAt(0).toUpperCase() + word.slice(1)
//     }).join(' ');
//   }
//   return newArr
// }
// console.log(titleCased(tutorials))