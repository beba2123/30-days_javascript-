// 'use strict'

// function logger(){
//     console.log("My name is Anteneh Alem..")
// }

// logger();  //==>> this is for calling the function over and over again inorder to use it.
// logger();


//  let apple;
//  let orange;
// function FruitProcessor(apple, orange){
    
//     const juice = `Juice with ${apple} apples and ${orange} oranges.  `;
   
//     return juice;
// }

// const theMixingJuice =  FruitProcessor(4, 5); //inorder to use the returned value we have to save it somewhere or using variable.
// console.log(theMixingJuice)
// console.log(FruitProcessor(4, 5))

// const CurrentYear = 2025;
// function CalcAge(birthYear){
//     return CurrentYear - birthYear;
// }

// // console.log(CalcAge(1991));
// const Age = CalcAge(1999);
// console.log(Age)


//function expression ..means  that function is value and we can store value in  a variable
// const Age = function (birthYear){
//     return 2025 - birthYear;
// }
// const CalcAge = Age(1991)
// console.log(CalcAge);

//Arrow function 
// const CalcAge = birthYear => 2035 - birthYear;
// const age = CalcAge(1999);
// console.log(age)

// const retirmentleft = (birthYear, retirment) => {
//     const currentAge =  2035 - birthYear;
//     const yearsLeft =  retirment - currentAge;
//         return `the amount of time you left for retirment is ${yearsLeft} years so you better chillout`;
// }
// console.log(retirmentleft(1991, 65))

// function cutPieces(fruit){
//     return fruit * 4;
// }


// function FruitProcessor(mango, avocado){
//     const mangoPieces = cutPieces(mango); // calling func
//     const avocadoPieces = cutPieces(avocado)
//     const juice = `Juice with ${mangoPieces} applespieces and ${avocadoPieces} orangespieces.`
//     return juice;
// }
// console.log(FruitProcessor(4, 8))

const CalcAverage = (score1, score2, score3) =>{
     Average = (score1 + score2 +score3)/3;
     return Average; 
}
const DolphineScores = CalcAverage(34,54,56);
const KoalaScores = CalcAverage(96,99,97);

console.log(DolphineScores, KoalaScores);
// console.log(KoalaScores);
const CheckWinner = (avgDolphins, avgKoalas) =>{
  if(avgDolphins > 2 * avgKoalas ){
    console.log(`The winner of the tournament is Dolphines by getting the average value of ${avgDolphins}...`)
  }else if(avgKoalas > 2 * avgDolphins ){
    console.log(`The winner of the tournament is Koalas by getting the average value of ${avgKoalas}.. `)
  }else{
    console.log(`the tournament ended by not getting the winner..so see you another time..`)
  }
}
CheckWinner(DolphineScores, KoalaScores)

const nameOfFriends = ['Abeba', 'Alem', 'Abera']
console.log(nameOfFriends[0]) //for printing the index zero elements...

const CalcAge = function (birthYear) {
   return 2037- birthYear;
}
const years = [1991, 1989, 2001];
const age1 = CalcAge(years[0])
const age2 = CalcAge(years[1])
const age3 = CalcAge(years[2])

console.log(age1, age2, age3)
const ages = [CalcAge(years[0]), CalcAge(years[1]), CalcAge(years[2])]
console.log(ages)


