// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  pizzaIngre: function(ingre1, ingre2, ingre3){
    return ingre1 + ingre2 + ingre3;
  }
};

// // const [Italian, , Vegetarian, ...otherFood] = [...restaurant.categories, ...restaurant.starterMenu];
// // console.log(otherFood);

// //destructuring array..
// // const arr = [1,2,3];
// // const [a,b,c] = arr;
// // console.log(a,b,c);

// //destructuring from the refrence one..

// // const [first, second] = restaurant.starterMenu;
// // console.log(first, second);
// // let [first, ,third] = restaurant.categories;
// // console.log(first, third);


// // //we use destructuring for switch variables..

// // //the first method ..
// // const temp = first;
// // first = third;
// // third = temp;
// // console.log(first, third);

// // //the easiest method for switching variable

// // [first, third] = [third, first];
// // console.log(first, third);

// // //for recieving two return values from a function
// // console.log(restaurant.order(2,2)); //we can use this one it but the output will be an array..

// // const [startmenu, mains] = restaurant.order(1,0);
// // console.log(startmenu, mains)
// // //so we can actully use  destructuring method in an array which is located inside another array.. nested destructive.
// // const arr = [2, 3, [4, 5]];
// // const [x, y, [a,b]] = arr
// // console.log(x, y, a, b);

// // //we can give a default value for the destructive
// // const arr2= [1,2,3];
// // const[i=1, j=1, k=1, l=1] = arr2;
// // console.log(i,j,k,l);

// // //destructive object..
// // const {mainMenu, starterMenu, categories} = restaurant;
// // console.log(mainMenu, starterMenu, categories);

// // //change  the method name on the refrence object 
// // const {mainMenu: Menu, starterMenu: Starter, categories: catagory}  = restaurant;
// // console.log(Menu, Starter, catagory);
// // //mutating variable (lets say there is a variable outside of the refrence object and the variable name outside refrence object are the same as a variable inside the refrence object)

// // let d = 21;
// // let f = 23;
// // const obj1 = {d: 12, f: 23};
// // ({d, f} = obj1);
// // console.log(d, f); 
// // //nested loop.
// // const{openingHours} = restaurant;
// // console.log(openingHours);

// // const {fri} = openingHours;
// // console.log(fri);

// // const {fri :{open, close}} = openingHours;
// // console.log(open, close);


// // //spread array..
// // const array1 = [7, 8, 9];
// // const addarr = [1 ,2 , ...array1];

// // console.log(addarr);

// // //function opertor  
// // const add = function(a, b, c){
// //    return a + b + c;
// // }
// // const Numbers = [1, 2, 3];
// // // const result = add(...Numbers);
 
// // console.log(add(...Numbers));
//  const Menu1 = [...restaurant.mainMenu, restaurant.starterMenu];
//  console.log(Menu1);

// // const str = "Anteneh";
// // const strSpread = [...str];
// // console.log(strSpread);

// // const add  = function(a, b, c){
// //   return a + b + c;
// // }

// // const Numbers = [1 , 2, 3];
// // const result = add(...Numbers);
// // console.log(result);

// // const ingre = [' pasta  ',  ' and ',' selse ']
// // console.log(restaurant.pizzaIngre(...ingre));

// const{sat, ...rest} = restaurant.openingHours;
// console.log(rest);

// const add = function (...Numbers){
//   let sum =0;
//   for(let i=0; i< Numbers.length; i++){
//     sum+=Numbers[i];
//   }
//   console.log(sum);
// }

// const x = [2, 3, 4];
// add(...x);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// Number 1
const[players1, players2] = game.players;
// console.log(players1, players2);
// Number the goalkeeper and the rest player.
// const[goalkeeper, ...restPlayer] = players1;
// console.log(restPlayer);
// console.log(goalkeeper);
// Number 3..->create an array which is named "all player.." of both teams.
// const allPlayer = [ ...players1, ...players2];
// console.log(allPlayer);

// Number 4 -> create new array that holds additional players inside the original array (bayermunich..)
// const players1Final = ["Thiago", "coutinho", "Persic", ...players1];

// console.log(players1Final);

//Number 5 -> change the odds name from x to drow
// const {team1, x: drow, team2} = game.odds;
// console.log(team1, drow, team2);

// 
// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} goals were scored..`);
// }
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals(...game.scored);

 const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//  for(const item of Menu){
//  console.log(item);
//  }
// for(const [index, element] of Menu.entries()){
//   console.log(`${index + 1} : ${element}`);
// }

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for(const day of days){
//    console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'no hours' ;  // using the null coelesion for saturday becouse  zero undefined when  
//   console.log(`on this day we open at ${open}`);
// }

//we can also use it for a funtion to check wether that method also exist or not.
// const beba1 ={
//   name: 'beba',
//   hello: function(){
//     console.log('hi people ..');
//   }
// }
//  beba1.hello?.() ?? 'there is no methods with  this name.';
 //when we want to loop over the keys which  is  located inside the object.

// const  proper = Object.keys(restaurant.openingHours)
// console.log(proper)
//  let properStr = `we are open ${proper.length} days per week: `;
//  for(const day of proper){
//   properStr += ` ${day}, `
//  }
//  console.log(properStr)
 

//  const entries = Object.entries(restaurant.openingHours);
//  console.log(entries);
//  for(const [keys, {open, close}] of  entries){
//   console.log(`on ${keys} we are open at ${open} and close at ${close}`);
//  }
//  const entries1 = Object.entries(game.scored);
//  for(const [keys, value] of game.scored.entries()){  //
//   console.log(`Goal ${keys + 1}: ${value}`)
//  }
//   let sum =0;
//  for(const odd of Object.values(game.odds)){
//      sum += odd;
//     // console.log(odd)
//  }
//  console.log(sum/3); 
//  for(const [team, value] of Object.entries(game.odds)){
//    const output = team  === 'x' ? 'draw' : `victory ${game[team]}`;
//    console.log(`odds of ${output}:${value}`); 
//  }
//  const newSet = ['anteneh', 'alem', 'resoto', 'alem']
//  const mySet = new Set(newSet);

//  console.log(mySet);

//  for(const set of mySet){
//   console.log(set);
//  }
// const newMap11 = new Map([
//   ['question', 'what is the best programming language?'], 
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'javaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again']
// ]);
// console.log(newMap11.get('question'));
// for (const [key, value] of newMap11){
//   if(typeof key === 'number') console.log( `Answer ${key}: ${value}`)
// }
// // const Answer = Number(prompt('Your answer..!'));
// // console.log([...newMap11]);
// console.log([...newMap11.values()])
// const Answer = 3;
// console.log(Answer);
// console.log(newMap11.get(Answer === newMap11.get('correct')));

//coding challenge 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events  = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(`an  event happened , every ${90/gameEvents.size} minutes so watch the game carefully otherwise you will miss so many things.`);

for(const [key, value] of gameEvents){
  const half = key <= 45 ? 'FIRST': 'SECOND'; 
  console.log(`[${half} Half] ${key}: ${value}`);
}
