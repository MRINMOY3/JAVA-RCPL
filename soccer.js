const game = {
  term1: "Baverly hills",
  term2: "Miami Florida",
  players: [
    [
      "Neymar1",
      "Neymar2",
      "Neymar3",
      "Neymar4",
      "Neymar5",
      "Neymar6",
      "Neymar7",
      "Neymar8",
    ],
    [
        "Messi1",
         "Messi2",
    "Messi3",
    "Messi4",
    "Messi5",
    "Messi6",
    "Messi7",
    "Messi8",
    "Messi9",
    "Messi10",]
  ],
  score:'4.8',
  scored:['Neymar4','Neymar5','Messi6'],
  date:'Dec - 06 -1991',
  odds:{
    team1:1.33,
    x:3.25,
    team2:9.0,
  },
};

const [players1,players2]=game.players;
console.log(players1,players2);// All two team sets
const [gk,...fieldplayers]=players1;// First arr
console.log(gk,fieldplayers);

const allplayers=[...players1,...players2];
console.log(allplayers);//all the players
//The strings-->. working with strings


console.log('The strings....\n');
const airline='TAP Air Portugal';
const plane='Leerjet 300';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);


console.log('B747-400'.length);
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));// from 4 till next it will extract...