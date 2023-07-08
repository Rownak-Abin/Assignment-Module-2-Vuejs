 /* Exercise 1*/ 

 function destructureExample(obj, arr){
    const {name, age} = obj;
    const [a,,c] = arr;

    console.log({name, age})
}

const obj1 = {name: 'John', age: 30};
const arr1 = [10,20,30,40]

destructureExample(obj1, arr1)


/* Exercise 2 */

function sumNumbers(...numbers){

     let sum = 0

     for(let x of numbers){
       sum +=x
     }
     console.log(sum) 
 }

 sumNumbers(1,2,3,4,5)




  /**Exercise 3 */

 function createGreeting(name){

    const res =  `Hello, ${name}! Welcome to our website.`
    console.log(res)

 }

 createGreeting('Alice')




 /**Exercise 4 */

 function isEven(num){

   const res = (num % 2) == 0 ? "Even" : "Odd"
   console.log(res)

 }

 isEven(65441)




  /**Exercise 5 */

 const arrowFunc = (a,b) => a * b

 let res = arrowFunc(5,6)

 console.log(res)




/**Exercise 6 */

 function getLargestNumber (a,b){
   const res = a > b ? a :b
   console.log(res)
 }

 getLargestNumber (15,60)




/**Exercise 7 */

 function getAddressCity(addressObj){
   const city = addressObj?.city ? addressObj.city : "Unknown"
   console.log(city)      
 }

 const address = { street: '123 Main St', country: 'USA' };
 getAddressCity(address)




  /**Exercise 8 */

 function doubleNumbers(arr){
   const doubleVal = arr.map((num) => num * 2)
   console.log(doubleVal)
 }

 doubleNumbers([1,2,3,4,5]) 




/**Exercise 9 */

  function filterEvenNumbers (arr){
    const evenVal = arr.filter((num) => num % 2 == 0)
    console.log(evenVal) 
  }

  filterEvenNumbers([1,2,3,4,5]) 




/**Exercise 10 */

  function sumArray (arr){
    const sum = arr.reduce((total, currVal) => total + currVal);
    console.log(sum);
  }

  sumArray ([10,20,30,40,50])


  

    /**Exercise 11 */

  function sortNumbers(arr){
    const sortedArray = arr.sort();  
    console.log(sortedArray);
  }

  sortNumbers([5,2,9,4,1,3,6])
