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