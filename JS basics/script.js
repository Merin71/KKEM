
console.log('I am running from terminal');
//Variable
let a=10;
let a1=20;
let firstName='maya';
let firstname='mm';
{
    let a=90;  //Block 2
    console.log(typeof(a));
}
console.log(a);
var b;
console.log(typeof(b));
//Array
let arr=[1,2,3,4,5,'Mridula'];
console.log(arr[1]);
//Object
let car={
    model:'i10',
    color:'Black',
    year_man:1970
}
let person=new Object();
person.age=33;
person.name='Maya';
console.log(car.model);
let obj1=[{
    model:'i10',
    color:'Black',
    year_man:1970
},{
    model:'i20',
    color:'Green',
    year_man:1972
}]
console.log(obj1[1].color);
let t=9;
let t1=++t;
console.log(t1)
//Functions
// function totals(a,b){
//     var sum=a+b;
//     return sum;
// }
// var result=totals(2,3);//Function call
// //console.log('The total sum is '+result);
// console.log(`The total sum is ${result}`);    //Template Literal
//Loops
for (let i=1;i<=10;i++) {
    console.log(i)  
}
let arr2=['Orange','Apple','Pear'];
for (const x of arr2) {
    console.log(x);
}
//For in loop
for (const k in car) {
    console.log(car[k])
}

//Array functions
let arr3=[1,2,3,4,55];
// arr3.forEach(function (item){
//  console.log(item);
// })

//filter function
let arr4 = arr3.filter(function(item){
    return item<5;
})
console.log(`The filtered array is ${arr4}`)
console.log(`The old array is ${arr3}`);

//conditional statements
let ab =77;
let cd ='77';
if(ab===cd){
    console.log('both values are equal');
}
else{
    console.log('both values are not are equal');
}

//Array destructuring
const [first,,thrid] =[1,2,3];
console.log(thrid);

//Array spread operator
let s2 = ['a','b','c','d'];
let s3 = ['ab','ef','gh','fg'];
console.log(s2.concat(s3)); // concatinating
let s4 =[...s2,...s3];  // 3 dot using to concat the two arrays
let s5 =[1,2,3,...s3];
console.log(s5);
let s6 =[a7,a2,...a5]=[1,2,3,4,5];
console.log(a5);

//Arrow funstions
//refer from functions above
function totals(a,b){
    var sum=a+b;
    return sum;
}
var result=totals(2,3);
console.log(`The total sum is ${result}`); 

var totals = (a,b)=>{
    var sum = a+b;
    return sum;
}
var result = totals(10,55);
console.log(`The  total sum is ${result}`);


function total(x,y){  //function keyword
    var sub = x-y;
    return sub;
}
var result = total(45,21);
console.log(`The value is ${result}`); 

var total = (x,y)=>{  //arrow function
    var sub = x-y;
    return sub;
}
var result = total(45,21);
console.log(`The subtraction value is ${result}`);

//ES6 classes
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const myDetails = new Person('John',17);
console.log(myDetails);

//modules
//Asynchronous function

setTimeout(()=>{
console.log( `I am executed afrer 5 secs`)
},5000);

setInterval(()=>{
console.log( `I am executed afrer 3 secs`)
},3000);