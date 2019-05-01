
// 1. Write an anonymous function that takes one argument of type number
// and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
function divThree(typeNum){
  if(typeNum % 3 === 0){
    return typeNum + " is divisible by three"
  } else {
    return typeNum + " isn\'t divisible by three"
  }
}
console.log(divThree(15));
console.log(divThree(5));
// // 2. Write an object called helloMe. Include your first_name, last_name and
// at least two other properties of you. Write a function that returns a description of you.
var helloMe = {
  firstName : 'Aaron',
  lastNname : 'Prenger',
  hair : 'blonde',
  eyes : 'blue',
  // getInfo: function(){return helloMe}
}
console.log(helloMe);
//
// // 3. Create an array of 5 grocery items. Write a function that returns
// the first, middle, and last item as a string.
const groceryItems = ['chips', 'dip', 'beer', 'meat', 'coffee']
function firstMidLast(){
  for (let i = 0; i < groceryItems.length; i++) {
    return groceryItems[0] + ' ' + groceryItems[2] + ' ' + groceryItems[4]
  }
}
console.log(firstMidLast());
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const word = 'Pneumonoultramicroscopicsilicovolcanoconiosis'
function alphabetSoup(str){
  return word.toLowerCase().split('').sort().join(' ')
}
console.log(alphabetSoup());
// 5. Given the arrays below, write a function animalNums that uses a for loop to print
// one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

function animalNums(){
  for(let i=0; i < nums.length; i++){
  console.log(nums[i] + ' ' + nouns[i])
  }
}
animalNums()
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the
// array and returns a new array of the numbers multiplied by 5.

var fiveNumbers = [2, 4, 6, 8, 10]

var multBy5 = fiveNumbers.map(function(index){
  return index * 5
})

console.log(multBy5);
