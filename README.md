codewars.com--->

javascript challenge for 30 days.
javaScript is a high level programming language and it is object oriented(storing data) and multi-paradigm programming language(we can use diffrent styles programming.) 
the role of javascript(we used it to make it more dynamic..) it means like loading data, hovering.. and also we used it on web application on web servers (back-end).


inorder to write javascript file in our html code we use <script>"write a code between these tags... and also it used to link javaScript file with the html file using src ="folder location" "</script>
Value and  variable
value is a small set of information in javascript is called value. variable it is a method that we use inorder to store a value is called variable. when we daclare variable there is rule 1st use camel case when we write a variable like ==> let firstName = "Anteneh". 2nd the variable name only consist number or string(letter) we don't use both of them together. 3rd never used the reserved keyword like new, name ..for declaring the variable. 4th make sure the variable more discriptive. 

data type(7 data type)
1 Number(it consist floating point , decimal and integer), 2.String (it is a sequence of characters). 3rd Boolean (logical type that can onlt be true or false ..) ==> 4th undefined(empty value)  example let name; ==> 5th null ==> 6th Symbol(ES2015) ==> 7th Bigint(ES2020)-large integers than the Number type can hold.(javaScript is dynamic  typing means that it can automatically assign it value based on thier input type or data type). 

NOTE ==>> type of is an operator which is used for determining the data type that we are using.


===>>> let, const, var(the old version of assigning variable)

let is used when we want to mutate a variable or when we want to re-assign a value.
const we cannot re-assign the given value or we used it for the immutable variable. NOTE we cannot declare empty using const eg const firstName we cannot do that .

===>>> operators()
adding operator

const firstName = " Anteneh ";
const lastName =  " Alem ";
 console.log(firstName + lastName )
the plus sign is used for concatenate the string and also  used for adding numbers.

assignment operator(=, ==, +=, *=..)
 let x = 25;
 x += 25;
console.log(x) answer 50.
comparison operator(>=, <=, <, >)

===>>> Template literal - used for  assemble multiple pieces(string) into one final string and it is one of the ES6 features.
 const myName = " Anteneh Alem ";
 const job = " fullStack developer ";
 const currentLocation = " Newzealand "
 const Antish = ` I'm ${myName}, i work as a ${job} in a amazon and i live in ${currentLocation}.`  ==>>this is what template literal is.
 console.log(Antish)

==> the other benfits of template literal is you dont have to write backslash and n to write  on the new line . example console.log(`String
anteneh`) 

===>>> type conversion and coehersion - conversion is type of method that convert an input type manualy  and coehersion is the reverse which means automatically. Note in cohersion and conversion the original value cannot change it's identity means that if it is string it remain as a string even if you change it to a number eg. const inputyear = '1991';
                                                         console.log(Number(inputyear)) ==> the input 1991 is always string out of the console.log.

==>> coehersion --> happens during the  operator of diffrent values what is means that when we want to add string and number together. eg -> console.log('i am' + 20 + ' years old '). 20 is number and the rest of is string. console.log('23' - '43') output 20 becouse (-)minus sign triger that they act like number. console.log('23' / '2') 11.5.. but when there is (+) it triggers concatenation like console.log('23' + '42' + 1)  output ==>> 23421


===>>> truthy and falsy value
==>> falsy value are value which has null, undefined, 0, NaN value in a boolean.
eg. const money = 0; let money;(becouse it is empty value means it is undefined)
==>> truthy value are value that are exclude four of the falsy value.

===>>> diffrence between ==(Loose equality) & ===(strict equality)

both of them we use it for comparison but the main diffrence between them is strict equalty isnot  support the type  coersion and loose one support it so for these reason when we use the loose  one
we face so many bugs so for that reason mostly it suggest to use the strict one(===) inorder  to reduce  bugs.

===>>> boolean operator(AND, OR, and NOT) 
in  AND both of them must be true inorder to make the statment true. 
in OR if one them is true it make the statment true.
NOT  is used to convert the operator example like true -> false or false -> true.


===>>> Switch 
one  of the javascript condition statements, which are  used to perform diffrent task or action based on diffrent condtion. example we want to do diffrent task on each day on a week so for this purpose we use Switch statment. 

// const Day = 'Saturday';  ==>> we assign the day we want to print then  

// switch(Day){  ==> we accept that argument and search it on each case inside the argument.
//    case 'monday':
//       console.log(" go to addiss.. ")
//       break;
//     case 'tuesday':
//        console.log(" watching Champions League.. ")
//        break;
//     case 'wednesday':
//         console.log(" playing game.. ")
//         break;
//     case 'Thurday':
//         console.log(" watching european League ")
//         break;
//     case 'Friday':
//         console.log(" watching serious movie.. ")
//         break;
//     case 'Saturday':
//         console.log(" watching premier league . ")
//         break;
//     case'Sunday':
//         console.log(" Go out with my friends .. ")
//         break;
//     default:
//         console.log("NOT") ==> if our input isnot listed on the list we set default.
// }

===>>> Statment and Expression 
-->> Statment is a group of expression that we design to carry out certain action.statment are two sided either they do the task or don't do it. any statment that can return value is automatically qualified to be used as an expression. thats why we called function and class as a  statment.

--> Expression is any word or group of  word or symbols that gives value. example 2,3,4,5,const,let.. 

===>>> conditional operator (terinary operator)
--> it is like an expression which has three parts ->condition , if part and the else.
                      const age = 23;
	condtion part <--age >= 23 ? ' I like to drink wine.. ' if part.. : ' I like to drink water.. '  else part...
==>> we  use ternary oprator for immidiate condition(it is not favourable if we use it for more than two conditions.. ) means that for big block of code it is better to  use if block.

===>>> 'use strict' -->> we use the strict mode  inorder to secure our code in javascript which means that if there is an error or a bug on our code it simply show us  the error other wise the javascipt pass it silently. 
===>>> function declaration and expression 
==>>function declaration .
we can declare a function using the  function keyword and function name of the funcion. 

function keyword<--function CalcAge(birthYear){
                   return 2025 - birthYear;
                }
==>> function expression.
in javascript function is a value so inorder to store that value  we have to set or declare a variable for  it.
const Age = function (birthYear){
    return 2025 - birthYear;
}
const CalcAge = Age(1991)
console.log(CalcAge);

--->>the main diffrence between function declaration and expression 
in function declaration we can call a function before it like this 
  
  const Age = CalcAge(birthyear)--> call the function before we are writng the function
function keyword<--function CalcAge(birthYear){
                   return 2025 - birthYear;
                }

-> but on function expression you cannot  call the function before it, you can call it only after.
  const Age = function (birthYear){
    return 2025 - birthYear;
}
const CalcAge = Age(1991) ==> we can call the function after it not before.
console.log(CalcAge);

===>>> Arrow function
->it is one of the function which doesnot use function key inorder to write a bunch of code inside it.
const CalcAge = birthyear => 2035 - birthYear; this for simple argument or for multiple argument we can use the below one.
const retirmentleft = (birthYear, retirment) => {
    const currentAge =  2035 - birthYear;
    const yearsLeft =  retirment - currentAge;
        return `the amount of time you left for retirment is ${yearsLeft} years so you better chillout`;
}
console.log(retirmentleft(1991, 65))

===>>> Arrays 
one the programming concept that is used for storing the data inside them, so the array concept is the basic concept for all the programmer.
const nameOfFriends = ['Abeba', 'Alem', 'Abera']
console.log(nameOfFriends[0]) //for printing the index zero elements...
also for knowing the length of the array..console.log(nameOfFriends.length) and also for knowing the last value in the array conole.log(nameOfFriends[nameOfFriends.length - 1)]);
-->we can change a data inside an array becouse array is mutable  and it is not primitive type what it means that any primitive types that is declared by 'const' we cannot change that but we can in an array becouse it isnot primitive type.
eg. const nameOfFriends = ['Abeba', 'Alem', 'Abera'];
    and we want to change on the values inside the array..
    nameOfFriends[2] = abebech;
	console.log(nameOfFriends) ==>>  ['Abeba', 'Alem', 'Abera'];

  ==>>there are some built in function in the array for example 
         -->> for adding element in the array we can use push, unshift...
eg. const friends = ['abeba', 'alem', 'abera'];
      friends.push('tadessa');==>it will add an element after the last element in the array. ==>['abeba', 'alem', 'abera', 'tadessa'];
	friends.unshift('tadessa') ==> ['tadessa','abeba', 'alem', 'abera']
NOTE--> as we said before the push,unshift is built in function so they have to return something  so in push and unshift return length.  const newlength = friends.push('tadessa') 
 		console.length(newlength); ==> it will give me the  new length of the array.
       

         -->>pop, shift both of them use for removing an element inside an array -> pop automatically remove an element whici is the last element inside the array but shift is  used for removing an element that is located at the first index.
		
			const friends = ['abeba', 'alem', 'abera'];
				friends.pop(); ==> it removes abera from the array.
				friends.shift(); ==> it removes abeba from the array.
==>> NOTE-> pop and shift are not returning index they return the element that they removed from the indexa and also there are somebuilt in function like "indexOf" for return it index. and 'includes' boolean function used for returning true or false if the function is exist in the array.

NOTE -> include is not type coersion means that it is strict mode. 

===>>> objects 
--> it is like an array it is used for store a group of value but there are diffrence between an array and an object 
 1, they store it as a key and value pair 
 2, they use {} instead of [].
 3, when we want structured data we use an array but for unstructured one we use object and we call an object based on key name..
  const PeronalProfile = {
   First_name : 'Anteneh'
   Age : 23
   County : 'biftu'
   Middle_name : 'Alem'
 }

-->> inorder  to retrieve data from an  object we can use two method dot and bracket  annotation. the main diffrence between them  we use bracket one for dynamic purpose. for example in prompt function
		const interestedin =  prompt('please what do you want to know between First_name, Age, County, Middle_name...?')
		console.log(PersonalProfile[interstedin]) but  we cannot use dot anntation becouse it is not dynamic.

==>> we said that a function is a value so we can create a function inside an object.
  const PeronalProfile = {
   First_name : 'Anteneh',
   Age : 23,
   birthYear: 1999,
   County : 'biftu',
   Middle_name : 'Alem',
   CalcAge: function(birthyear){ // as we see the functio is paired with the key so there is key value pair.
	return 2023 - 1999;
   }
 }

===>>> Break and continue
-> when we use a break inside any loop statment it jump out of that loop means that eg.
            for(int i =0; i< 10; i++){
	         if( i === 4) break; ==>> means that it is going until it prints out 1,2,3 then the rest of the number will not going to printed.
		}
-> when we use the continue one it will not jump out from the loop it only jump  that out-put. eg.
		for(int i=0;i<10; i++){
		   if(i==4) continue; output 1,2,3,5,6,7,8,9 -->> it will only jump out the No 4;
		}


===>>> DOM(Document object model) monuplation
==>> it is the strucrured representation of html documents which allows javascript to access html elements and styles to manuplate them(changing the text, html, css) . --> dom is not javascript it is an web-api that can interact with the javascript so we can call 
it is written in javascript.
dom represent the html as a tree structure and each html tag has it's node but all the html body is inside the document that  why we start from the document.
document.queryselector() -->>so inside the quotation we can write the selected html tags like if  it is class we use ."any thing  we want" or if  it is  an id we can write  #'..' 
-->> if  the html tag is text we use the document.queryselector().textdocument or if the tag is input value we use document.queryselector().value .... 

=> addEventListner()  it is one of the method that attaches an event handler to an element without overwriting existing event handler. ex. document.queryselector('.check').addEventListner('click', function(){
console.log(document.querySelector('.guess').value);
 })

Note--> when we want to style we are going to use document.queryselector('body').style.(any css commands we want) = '';
===>>> Class List -->> is a read-only proprerty that is used to return CSS classes in the form of an array which allow us to remove, add, replace, loggle or check whether the specified CSS is present or not.
   Eg.  modal.classList.remove('hidden'); class name modal then write the classlist and then write then we are going to write what we are going to do with that CSS class. 


==>> Note -> when we want to select an element using their id instead of their class name we use two thing ==>1-> document.queryselector('# then id name');
document.getelementid('id name no hash tag...')



===>>> JavaScript  Engine 
-> javascript engine is built from stack and heap.stack is for excute the source code and a heap is used to store the code.
==>> compilation and interpretation 
-> compilation 
the entire source code is converted into a machine code at once and written to a binary file that can be excuted by a computer.the excution happen way after compilation.
-> interpretation
it excute the source code line by line but we have to  know that the code still needs to be converted to a machine code and previous javascript model are interpreted one. but the new version javascript is just in time compilation .
-> Just In Time Compilation.
it is the mixed of compilation and interpretation which means that the entire source code is converted into a machine code at once, then excuted immidiately.it doesnot  have  to be away after compilation.

==>> How is just in time compilation works 
1st it parse means that it reads the source code by using the method called abstract syntax tree(AST) which is used to read like built function like const or function or let...and also used to read an error.
2nd compilation
3rd excution
but between compilation and excution there is a thing which is called runtime optimization which is used to  re-optimize a code paths based on ongoing profiling and feedback. this iterative optimization used to increase the performance.

===>>>JavaScript engine
-> it is like a container or a box which contians all the neccessary javascript staff init like js-engine, web-api(DOM, TIMERS, CONSOLE.LOG), Callback queue(click, timer, data).

===>>> Excution Context -> after compilation there is another step which is called excution so for the excution there are some steps that has to be followed..
Steps 1st-> create global  excution context(for top level code)->  which excute everything  other than inside function or method this things have it's own method..
NOTE-->> Enviroment Context is a piece of javaScript code is excuted.Stores all the necessary information for some code to be excuted.
Step 2nd -> excute of top level code.
Step 3rd -> excution of functions and waiting for callbacks. 
 

===>>> what is inside the excution context
-> 1st Variable Enviroment(like let const var function argument)
-> 2nd Scope Chain
-> 3rd this keyword


THE CALL STACK

-> it is a place where the excution context stacked on top of each other, to keep track of where we are in the excution.javaScript is a single threaded programming language which means that it can only do one thing at a time.



===>>>Scoping and Scope Concept
-> Scoping used to tell how our program is organized and accessed. like where do variables live? ...
-> Lexical Scoping the scoping is controlled by  placement of function and blocks  of code.
-> Scope is a space or enviroment in which a certain variable is declared or it is like a container or context that holds variables and define their life span and their availabilty. so it helps to organize and manage the variable and functions within the prigram and determine which parts of the code can access or modify them.there are diffrent types of scope global scope, function scope and block scope.
==>> global scope any varible that is declared out side  of the funtion is called global scope like const me = "Anteneh Alem". Variable declared in global scopes are accessible everywhere.
==>> Function scope are accessible inside funtion  not outside like function calcAge(birthYear){
									const now = 2037;
									const age = now - birthYear;
									    return age;
									}

									console.log(now); //refrence error becouse it cannot accessed out side of the funtion.

==>> Block scope is accessible only inside  block(block scoped) however this is only applies to let and const variables.


==>> NOTE when we declare variable we can use const or let but cannot use var. eg
  		const addExpre = function (a,b){
			return a+b;
		}; but we cannot use 
		var addExpre = function (a,b){
                   return a+b;
	       }
===>>> Argument keyword
-> it is like a keyword refers to an array like an object that is available with in the scope of a function. it contains all the arguments(values) that were passed to the function when it was invoked. the "arguments" allows to access indvidual arguments passed to a function was defined without explicitly declaring named parameters.it provide a way to access and manipulate the arguments dynamically within the function.

function sum() { //here when we delclare function we don't pass any arguments
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {  
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10  //so we can write our  own argument and we can access them write..we can push or pop becouse it is store every element as an array.. that we are passing to it 

==>>NOTE -> we cannot  use  var keyword for an arguments when we declare a function..


===>>>Data-Structure in javascript.
=> Destructuring Array -> this is like a process which is used for breakdown complex data-structure to simple one. 
-> so there are diffrent ways we use destructing arrays like 
1st -> for selecting an element which is located inside an array.

eg. lets say there is a given reference object 
  const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  orderdaily: function(starterindex, mainindex, time, location){
	console.log(`the order is ${starterMenu[startreindex]} with ${mainMenu[mainindex]} and with time zone of${time} o'clock from ${location}.`);
     }
  }
resturant.orderdaily({
  starterindex,
  mainindex,
  time,
  location,
})

let [first, ,third] = restaurant.categories;
console.log(first, third);
-> so the out put will be like  ( italian Vegetarian)

2nd -> we use it for switching a value.
const temp = first;
first = third;
third = temp;
console.log(first, third);
==>> so the out put  will be  like Vegetarian  italian .

===>>> for recieving two return values from a function
	->const[startmenu, mains] = restaurant.order()
so the out put will be like (pizzria foccaci).

==>> we use it for destructing an array when using a nested array.
const arr = [1, 2, [4, 5]];
const [x, y, [a, b]] = arr;
console.log(x, y, a, b);

the out-put will be like 1 2 4 5.

===>>> object destructive lets see an example.
const {name, starterMenu, mainMenu} = resturant
console.log(name, starterMenu, mainMenu);

===>>> Spread Operator
-> it allow's to expand or spread elements from an iterable such as an array  or object into a places where multiple   elements or arguments are expected.
1st array manipulation(spread operator can be used to combine multiple arrays together in a single array.) 
    eg.const array1 = [1, 2, 3];
	const array2 = [...array1]; // Creates a shallow copy of array1
	const combinedArray = [...array1, 4, 5]; // Combines multiple arrays into a single array

2nd used to pass an array of arguments to a function as individual arguments.
   eg. function sum(a, b, c) {
  	return a + b + c;
	}

 	const numbers = [1, 2, 3];
	const result = sum(...numbers); // Passes array elements as individual arguments


3rd for creat shallow copies of objects or merge multiple objects into single objects.
    const object1 = {foo: 1, bar: 2};
    const object2 = {baz: 3};
    const mergeobject = {...object1, ...object2};
    
4th it is used for capturing multiple arguments into array like structure known as rest parameters.
      function sum(...numbers) {
 	 let total = 0;
  	for (let number of numbers) {
   		 total += number;
 	 }
 	 return total;
	}

	const result = sum(1, 2, 3, 4, 5); // Captures multiple arguments into an array
5th it used within array or  object destructuring to assign the remaining elements or properties to a new variable.
   	==>>  in the destructuring arrays.	
		const numbers = [1, 2, 3, 4, 5];
		const [first, second, ...rest] = numbers; // Destructures the array and assigns remaining elements to 'rest'.
      ==>> in the destructuring objects.
		const object = { a: 1, b: 2, c: 3, d: 4 };
		const { a, b, ...rest } = object; // Destructures the object and assigns remaining properties to 'rest'


==>> we also used it  on a string. like lets for example const str = "Anteneh";
							 const SprString = [...str];
							 console.log(SprString);



Rest Pattern and Parameter
==>> pattern used in array to capture the remaining elements into a new array. it uses the rest syntax followed by a variable to represent the remaing elements.

		const [first, second, ...rest] = [1, 2, 3, 4, 5];
		console.log(first); // Output: 1
		console.log(second); // Output: 2
		console.log(rest); // Output: [3, 4, 5]
==>> the parameter is used in function declarations to represent an indefnite numbers of arguments as an array like structure.it allows you to pass any numbers of arguments to a function and they will be gathered into an array.

const add = function(..Numbers){
   let sum =0;
   for(let i=0; i<Numbers.length;i++){
       sum+=Numbers[i];	
    } 	
    console.log(sum);
   }
const x = [23, 32, 23];
add(...x);

Note ==>>  the rest pattern is used in array destructuring, while the rest parameter is used in function declarations.


===>>> Short Circuiting.
-> before defining the short circuiting lets see first about operator and operator uses any data type and also it return any data type and also it short-circuiting.
-> console.log(3 || 'janos') -> output will be 3 becouse in or operator there is a rule which said that if it find the truth value first it will out put it first and last he will not see other value in it.
console.log('' || 'jonas') -> output jonas.
--> so basically the 'OR' operator return the the first truthy value that it's found or the last value if all the  value inside it  is false.
--> so basically the 'AND' operator return true if all the value are true other wise it  become short circuited  the rest of the other value after it and it will return the first falsy value.

==>> Nullish Coelescing function.
-> that provides a concise way to handle default values when dealing with null or undefined values.it print out it's right hand side otherwise if the left hand side expression is any other falsy value(empty string, zero or false) it return the left hand side. 
eg.   const name = null;
	const defaultName = 'John Doe';
	const finalName = name ?? defaultName;

	console.log(finalName); //since the name is null value it jumps it finds jhon doe so jhon doe is not a null value so the out put will be jhno doe.==>> Output: 'John Doe'


===>>> optional chaining
-> it is used for accessing th properties and method of an  object without having to explicitly check for the existence of intermidiate properties. it helps to simplify  the process of accessing nested object  and their properties when dealing  with undefined or null values.
-> it syntax is the question mark(?)placed before '.'  operator.

const person = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'Exampleville',
    country: 'USA'
  }
};

// Without optional chaining
const country = person.address.country; // Accessing nested property

// With optional chaining
const country = person.address?.country; // Accessing nested property with optional chaining

console.log(country); // Output: 'USA'

const person = {
  name: 'John',
  sayHello: function() {
    console.log('Hello!');
  }
};

// Without optional chaining
person.sayHello(); // Output: 'Hello!'

// With optional chaining
person.sayHello?.(); // Output: 'Hello!'

=> Optional chaining is especially useful when working with complex data structures, APIs, or when dealing with data that might not always be present. It simplifies code by reducing the need for explicit null or undefined checks, making it more concise and readable.

===>>> Looping objects_keys,  values, and entries
Note -> mostly we use them for iterate an object inside another object..remember!!
-> used to for iterate keys which is inside the object.
 const keys = Objects.keys(person);
console.log(keys); -->> print out -> name and sayHello(function name.)
->inorder  also to print  values.
 const values = Objects.values(person);
 console.log(values); -->> prints out like John, Hello!.
===>>> sets 
->is a built object that allows you to store unique values of any type.it provides a collection of unique elements and ensures that each element appears only once in the set. set is neccesary when you want to work without duplicate and when the other order of the elements isnot important.
  -->>when creating a new set.  const mySet = new set();
   -> to know the size of set mySet.size
   -> to add an element mySet.add('any thing you want to add.');
   -> to know whether the element is there or not mySet.has('');
   -> to delete an element mySet.delete('the value we want to delete');
++>Note -> in set we cannot retrieve data.

==>> Map
->it is similar to an object but with a few key diffrence,  it allows you to store key-value pair but the key can be any of type  and also it is iteratable but the object is not inorder to do that we use like object.key, object.entiries(), object.values....
 const newMap = new Map();
->so in map we can add element using newMap.set(key, value);
->to retrieve the data we can use newMap.get(key);
->to check the size of the Map newMap.size;
->to check the value newMap.has(key);
->to delete the value inside the Map newMap.delete(key);


===>>> when and where to use an Arrays vs Sets And objects vs maps
  Array  															Sets
=> Arrays an we use it for when we need ordered list of values(might contain duplicates) 	 =>used when you need to work with unique values.
=> when we want to maipulate data.								 =>used when we need high performance is really important 
   										                 =>use to remove duplicates from arrays
 Objects															MAPS			
=>more 'traditional' key/value store								 =>better performance
=>Easier to write and access values with . and []						 =>easier to iterate
=>we use it when we need to include functions(methods)						 => easy to compute size
=> use when working with JSON									 =>keys can have any data type
												 =>key can have any data type.
