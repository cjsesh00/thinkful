'use strict';

function hello() {
  console.log('hello world');
}

function goodbye() {
  console.log('goodbye world');
}

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

repeat(goodbye, 5);
repeat(hello, 5);

function hazardWarningCreator(typeOfWarning) {
  let warningCounter= 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));
console.log(rocksWarning('Main St and Pacific Ave'));

'use strict';

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
input = input.split(' ');
console.log(input);


let output = input.reduce(function(acc, val) {
  if (val.length === 3) {
    acc = acc + ' ';
  } else {
    acc = acc + val.substr(val.length - 1);
  } return acc;}, '');

console.log(output);

'use strict'

function hello (){
    console.log('Hello World');
}

function goodbye(){
    console.log('Goodby world');
}

function repeat(func, num) {
    for(let i =0; i < num; i++) {
        func();
    }
}




function filter(arr, func) {
    const myArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            myArray.push(arr[i]);
        } 
    }
    return myArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function turtleSteps(arr) {
  const myArray = [];
  for(let i = 0; i < arr.length; i++) {

  }
  return myArray;
}

const test = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleSteps(test));

const loaf = {
    flour: 300,
    water: 210,
  
    hydration: function() {
      return (this.water / this.flour) * 100;
    }
      
  };
  
  //console.log(`${loaf.flour} ${loaf.water}`);
  //console.log(loaf.hydration());
  
  function Person(str, title, boss) {
      this.name = str;
      this.jobTitle = title;
      this.boss = boss;
    }
    
    const bob = new Person('Bob','Trash Man', 'kate');
    const dave = new Person('Dave','Actor', 'karen');
    const donald = new Person('Donald', 'Chef','john');
    const vic = new Person('Vic', 'da boss',);
    const myArray = [bob, dave, donald, vic];
    
    function display(arr, i) {
    
      if (arr[i].boss ===  undefined) {
        return`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody`;
      } else {return`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}`;}
        
    }
    console.log(display(myArray, 3));
  
    const letterCheck = {
      a: 2,
      b: 3,
      c: 4,
      d: 5
  }
  const getChar = input => {
      const firstLtr = input[0];
      return !letterCheck[firstLtr] ? " " : input[letterCheck[firstLtr] - 1];
  }
  const decode = input => input.split(" ").map(getChar).join('');
  console.log(decode('craft block argon meter bells brown croon droop'));


  function createCharacter(nm, ncm, rc, or, a, d) {
      const player = {
      name: nm,
      nickName: ncm,
      race: rc,
      origin: or,
      attack: a,
      defense: d,
      
     describe: function() {
         console.log(`${this.name} is a ${this.race} from ${this.origin}`);
       }
     };
     return player;
     }

     const characters = [
        createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
        createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
        createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
        createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8
        createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
    ]; 

    const jeri = createCharacter("Jeri Droth Heifen", "jeri", "Man-Elf-Hob", "Regular Earth", 99 , 99);

    characters.push(jeri);

    

    evaluateFight: function(obj) {
        
        let x = (obj.defense > this.attack) ? 0 : this.attack - obj.defense; 
        let y = (this.defense > obj.attack) ? 0 : obj.attack - this.defense;
        
        return (`Your opponent takes ${x} damage and you take ${y} damage.`);
     }
  }

  characters.find(


  }