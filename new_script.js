// // use 'strict';

restaurant = {
  mainMenu: ["Passta", "Butter Naan", "Chilli Chicken"],
  starterMenu: ["Honey Chilli Potato", "Chicken soup", "Crispy Babycorn"],

  orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious PASSTA with ${ing1} , ${ing2}, ${ing3}`
    );
  },
  name: "Ramsey Jordis kitchen",

  openinghours: {
    mon: {
      open: 12,
      close: 12,
    },
    tue: {
      open: 12,
      close: 12,
    },
    thurs: {
      open: 9,
      close: 10,
    },
  },
};
// const arr=[7,8,9];
// const badnewarr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badnewarr);

// //The spread operator
// const new_arr=[1,2,...arr];//-->>... is a spread operator
// console.log(new_arr);//...arr-->. all the element are added
// //used in the expansion of an arrray

// console.log(...new_arr);// it is equivalent to write
// //1,2,3... individually-->> they can be written-->>treated equivalent

// const new_menu=[...restaurant.mainMenu,'Gnocci','Alpino'];
// //... is same as  destrucuring
// //... is used in placews where we would use values saperated by commas
// console.log(new_menu);

// //Copy array and -->> the

// //*-*
// const mainMenucopy=[...restaurant.mainMenu];
// console.log(...mainMenucopy);
// // The shallow copy*-*
 
// // To join two arrays
// // The spread works on all so called iterators

// const menu=[...mainMenu,...starterMenu];
// console.log(menu);
// console.log(...menu);

// //The iterabels-->> the strings , maps and sets
// //The strings arwe also iterables
// // ... spread can be also used here
// const string='Mrinmoy';// The unpacking of an array
// const letters=[...string,'','S.'];
// console.log(letters);
// console.log(...string);

// // tHe errors
// // The multiple values saperated by ciommas -->> are yusually expected when we
// // pass args in function or we create arrays
// //console.log(`${...string} Hello`);

// //THE REAL LIFE EXAMPLE
// // Function accepting multipke arguments
// // taking ings from prompt window

// // / the escaping \ escaping
// const ingredients=[prompt('Let\'s make passta ! Ingredients 1?'),prompt("Let's make passta ingrn2"),prompt("Lets make passta ingredients 3??")];
// console.log(ingredients);

// // CaLLING The function

// orderpasta(ingredients[0], ingredients[1],ingredients[2]);
// orderpasta(...ingredients);

// const NEWRESTAURANR={foundedIn:1995,...restaurant,founder:'Mazzini'};
// console.log(NEWRESTAURANR);

// const restaurant_copy={...restaurant};
// restaurant_copy.name='Ramsey\'s';
// console.log(restaurant_copy.name);
// console.log(name);

// //The rest pattern and thw rest parmeters
// // To colect multiple elements and condencse them into an array

// // Spread because on right side of the ssignment operator
// const array=[1,2,...[3,4]];

// // The rest syntax-->> LHS of th assignment operator
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);

// /// ... on both sides of the assignment operator
// const[a1,,a2,...other_food_items]=[...mainMenu,...starterMenu];
// console.log(a1,a2,other_food_items);
// // The rest syntax collects all the elemtns adfter tge kast variavke entered
// // the resdt element must be the last element

// //The rest pattern and the parameters
// //The rest pattern and the oparameteres
// // The spread -->> to expand array into the individual elemts

// // To collect multiple elemnts and condence them into one
// // Spread-->.On the right side of the assignem,tn operator
// const newarr=[1,2,...[3,4]];
// const [a01,b01,...others01]=[1,2,3,4,5,6];
// console.log(a01,b01,others01);

// const [pizza,,rissoto,...otherfood11]=[...mainMenu,...starterMenu]
// console.log(pizza,rissoto,otherfood11);

// // first retreive the main menu field then it will get others
// // or rest of the fields
// const {mon,...weekdays}=openinghours;
// console.log(weekdays);
// // except mon all others are shown

// //the functins-->>
// // The unction for debt

// /// Wirth the rest syntax we compress the statement

// const add=function(...numbers1) {
//     let sum=0;
//     console.log(numbers1);
//     for(let i=0;i<numbers1.length;i++)
//     {
//         sum+=numbers1[i];
//     }
//     console.log(sum);
// };
// add(1,2);
// add(5,3,7,2);
// add(1,2,3,4,4);// Any arbitary number of arguments

// const x=[1,2,3,4,5];
// add(...x);// Manuyally writing the contents of x by spreading compressing

// //... indicates the rest parametr syntax

// const order_pizza=function(MainIngredients,...otherIngredients)
// {
//     console.log(MainIngredients);
//     console.log(otherIngredients);
// }

// order_pizza('Mushroom','Onion','Paneer','Oloves','Spinach');
// order_pizza('Pepepr Barbeque CHICKEN');

// /// The short circuitinh -->> aand and the or operator
// // || operator can take and return any data type
// // We can do short circuit evaluation over here
// //-->>If both are true is truth -->> then the other one would not be evaluated
// console.log(3 || "Jonas");
// console.log("" || "Jonas"); //Jonas
// console.log(true || 0); //true
// console.log(1111 || false);
// console.log(undefined || null); // The undefined and the null
// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// // Helloo-->. it is the first truth valuye int the operational chain
// const numguests = 100;
// const guests = numguests ? numguests : 10;
// console.log(guests);





//nullish operators
//tHE NULLISH COALEASING OPERATYRO
restaurant.newGuests;
restaurant.non_exsistant='';

const guests_new_1=restaurant.newguests||10;
console.log(guests_new_1);

const guests_new_11 = restaurant.newguests ?? 10;
console.log(guests_new_11);

const guests_new_111 = restaurant.non_exsistant || 10;
console.log(guests_new_111);

const guests_new_1111 = restaurant.non_exsistant ?? 10;
console.log(guests_new_1111);


const rest1={
  name:'Capri',
  New_guests:'Rossi',
  numguests:100,
}

const rest2= {
  name: "Capri1",
  New_guests: "Rossi1",
};

rest2.numguests=rest1.numberofguests||10;


//The logical assignmwnent operator
const rest1_1={
  name:'Capri',
  new_guests:0,
};

const rest2_2={
  name:'La-piazza',
  owner:'Antoni rossi',
};

rest2_2.New_guests=rest1_1.New_guests||10;//Tru -> first ->> dont evaluate the sewcond one
rest1_1.New_guests = rest2_2.New_guests || 10;//Second returned bec first is false
console.log("The new operators");
console.log(rest1_1);
console.log(rest2_2);


//The logical or operator
//The or assignment operator
// rest1_1.new_guests||=10;
// rest2_2.new_guests ||= 10;//assigned with a value of 10 if false
console.log("-----------or----------\n");
console.log(rest1_1);
console.log(rest2_2);  
console.log("--Nullish--{null or undefined}\n");
rest1_1.new_guests ??= 10;
rest2_2.new_guests ??= 10;
console.log(rest1_1);
console.log(rest2_2);  

console.log("-----------nullish coaeleessing----------\n");
rest1_1.owner = rest1_1.owner && "<ANONYMOUS>";
rest2_2.owner=rest2_2.owner&&'<ANONYMOUS>';
console.log(rest1_1 );
console.log(rest2_2);

rest1_1.owner&&='<Anonymous>';
rest2_2.owner &&= "<Anonymous>";
console.log(rest1_1);
console.log(rest2_2);
// Work bec of short circuiting
//truth then 2nd is evaluated

