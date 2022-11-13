// console.log("hello bbs");
// const a=10;
// const b=5;
// console.log(b+a);

// if(a>5)
// {
//     console.log(a + " is greater than 5");
// }
// else if(b>5){
//     console.log(b +" is greater than than 5");
// }
// else{
//     console.log(a + "&" + b + "are smaller than 5");
// }
// const n=10;

// for(let i=1; i<n; i++)
// {
//     console.log(i);
// }

// const data={
//     key: "value",
//     key1: 2,
//     key2: a,
    
// };


// const arr= [a , 2 , 3 ,"string", "01", true];





// const a={
//     b:undefined,
//     c:null,
//     d:{
//         b:1,
//         c:2,
//     },
// };

// try{
//     console.log(a.b.c)
// }catch(err)
// {
//     console.log("failed accesing a.b.c")
// }




function square(x)
{
    return x*x;
}


// function print(x){
//     console.log(x);
// }

// print("Hello World");
// print("square of 5 is "+ square(5));
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "O*",
    T : getRandomJoke.body
}));