'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

//destructuring array..
// const arr = [1,2,3];
// const [a,b,c] = arr;
// console.log(a,b,c);

//destructuring from the refrence one..

// const [first, second] = restaurant.starterMenu;
// console.log(first, second);
let [first, ,third] = restaurant.categories;
console.log(first, third);


//we use destructuring for switch variables..

//the first method ..
const temp = first;
first = third;
third = temp;
console.log(first, third);

//the easiest method for switching variable

[first, third] = [third, first];
console.log(first, third);

//for recieving two return values from a function
console.log(restaurant.order(2,2)); //we can use this one it but the output will be an array..

const [startmenu, mains] = restaurant.order(1,0);
console.log(startmenu, mains)
//so we can actully use  destructuring method in an array which is located inside another array.. nested destructive.
const arr = [2, 3, [4, 5]];
const [x, y, [a,b]] = arr
console.log(x, y, a, b);

//we can give a default value for the destructive
const arr2= [1,2,3];
const[i=1, j=1, k=1, l=1] = arr2;
console.log(i,j,k,l);
