#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
// // // // // // homework:
// // // // // // interfaces
// // // //homework  1:call stack, 2:event loop, 3: call back que
// // // // // // 2:structural typing in typescript
// // // // // //1: datatype: unknown / any
// // // // // // 2:explicit type casting
// // // // // //3: functions

// // // // // let age: unknown = true; // unknown ma koi bhi type value store kr skty hn lkn is ki value khin or ksi variable ma store nhi kr skty hn
// // // // // // when we use unknown?
// // // // // // agr hum khin or i mean ksi or computer sy data store krty hn to ho skta h hmyn us time pta na ho kh data type kia h us waqt hum unknown data type use kr skty hn
// // // // // let num1:any = "18"; // any k andar kuch bhi store kr skty hn or any ki values ko khin bhi store kr skty hn
// // // // // let result:number = num1 as number; // its means explicite type casting
// // // // // console.log(result)
// // // // // // explicit type casting: krney ky 2 methods hn
// // // // // // explicit type casting data type ko change krta h values ko nhi
// // // // // //1:this is a first method
// // // // // let result1:number = num1 as number; //this is a first method
// // // // // //2:this is a second method
// // // // // let result2:number = <number>num1 ; //this is a second method
// // // // // // functions
// // // // // // rest parameters: parameters k start ma ... 3dots lga dyn to ye rest parameters khlata h
// // // // // // console.log( ) bhi aik rest parameter h 
// // // // // function invite(...guest:string[]){
// // // // // console.log(guest)
// // // // // }
// // // // // invite("Ayesha","naila");

// // // // // // default parameters:
// // // // // function invite1(host:string,...guest:string[]){
// // // // //     console.log(guest)
// // // // //     console.log(`${host}`)
// // // // //     console.log(`our host is ${host} and guests are (${guest})`)
// // // // //     console.log(`${guest.join(" ")}`) //join array method use hota h join krny kly
// // // // //     console.log(`${guest.join("|")}`)    
// // // // // }
// // // // //     invite1("Ayesha","naila","amina","abiha");
// // // // //     // overloade function:
// // // // //     // ye login /signup jysi application ma istamal hota h
// // // // //     // agr ap ny oveloaded function bnany hn to uskly apko same name k aik sy zyada functions bnyn gy
// // // // //     // overloaded function ma {} curley braces use nhi krty
// // // // //     function add(arg1:string, arg2:string):string; //overloade function
// // // // //     function add(arg1:number, arg2:number):number; //overload function
// // // // //     function add(arg1:number, arg2:string):string;
// // // // //     function add(arg1:boolean, arg2:boolean):boolean; //overload function
// // // // //     function add(arg1:any, arg2:any){ //main function
// // // // //         return arg1 + arg2
// // // // //     };
// // // // //     console.log(add("22" , "45"));
// // // // // console.log(add(22,54));
// // // // // console.log(add(22,"56"));
// // // // // console.log(add(true,false));
// // // // // // string case functions:
// // // // // let firstname = "Zakia";
// // // // // firstname.toUpperCase();
// // // // // console.log(firstname.charAt(0).toUpperCase() + "akia"); // for being first capital letter
// // // // // console.log(firstname.toUpperCase()); //1st function :upper case :ZAKIA
// // // // // console.log(firstname.toLowerCase()); //2nd function: lowercase: zakia
// // // // // console.log(firstname.length);
// // // // // // .fix function: set it to decimal point
// // // // // let price =18;
// // // // // console.log(price.toFixed(2));
// // // // let visit = 'sindh';
// // // // if(visit === 'sindh'){
// // // //     visit = 'karachi';
// // // // }
// // // // if (visit === 'sindh'){
// // // //     console.log('visit karachi');
// // // // }
// // // // else{
// // // //     console.log('visit port grand')
// // // // }
// // // // let saturday = 'gym';
// // // // let sunday = 'yoga';
// // // // if(saturday === 'gym'){
// // // //     sunday = 'rest';
// // // // }
// // // // if(sunday === 'rest'){
// // // //     console.log('its rest day');
// // // // }
// // // // else{
// // // //     console.log('lets workout')
// // // // }
// // // // let mycar = 'toyota'; mycar = 'honda'; mycar = 'KIA'; 
// // // // if (mycar === 'toyota'){
// // // //     console.log('toyota');
// // // // }
// // // // if(mycar === 'honda'){
// // // //     console.log('honda');
// // // // }
// // // // if(mycar === 'KIA'){
// // // //     console.log('KIA');
// // // // }
// // // // let salam:any;
// // // // if(salam === undefined){
// // // //     console.log('assalam-o-aleikum')
// // // // }
// // // // else{
// // // //     console.log('waleikumsalam')
// // // // }
// // // // let myvar = null;
// // // // if(typeof myvar !== 'undefined' && myvar !== null){
// // // //     console.log('myvar is defined and not null');
// // // // }
// // // // else{
// // // //     console.log('myvar is either undefined or null');
// // // // }
// // // // let a = [100,200,300];
// // // // let b = "ali";
// // // // if(a.length === b.length){
// // // //     console.log('theak hai');
// // // // }
// // // // else{
// // // //     console.log('galat hai')
// // // // }
// // // // let x:number = 0;
// // // // if(x++){
// // // //     console.log('x is truthy');
// // // // }
// // // // else{
// // // //     console.log('x is falsy')
// // // // }
// // // // let pass:any = '123';
// // // // let emil:any = 'xyz@email.com';
// // // // if(emil === 'xyz@email.com'){
// // // //     if(pass === 123){
// // // //         console.log('success')
// // // //     }
// // // //     else{
// // // //         console.log('fail')
// // // //     }
// // // // }
// // // // else{
// // // //     console.log('email is incorrect')
// // // // }
// // // // null:
// // // // let a:null | number = null;
// // // function divide(a:number, b:number){
// // //     let ans = 0
// // //     ans = a/b
// // //     if(b == 0)
// // //        { return null}
// // //     return ans

// // // }


// // // let a = divide(10,0);
// // // if(a != null)
// // //     console.log(a);
// // //     else
// // //     console.log("invalid operation")
// // // // narrowing:
// // // let pass:string | number ; 
// // // pass = "zakia";
// // // console.log(pass.toUpperCase()) //yhan to hum ny union type use ki h lkn console ma string type bta rha q is liy hum ny ussy value assign ki string ma
// // // pass = 2345;
// // // console.log(pass.toFixed());

// // // console.log(Math.random()*2)
// // // let newage = Math.random() > 0.6 ? "khan": 60
// // // console.log(newage);
// // // console.log(typeof newage);
// // // if(typeof newage === "string"){
// // //   console.log ( newage.toUpperCase())
// // // }
// // // else{
// // //     newage
// // // }
// // // //type ilyas: is ma = ka use krty hn
// // // type Person={
// // //     name:string;
    
// // // }
// // // //interface:is ma  = sign nhi lgta
// // // interface IPerson{
// // //     name:string;
// // // }
// // // let Person : IPerson = {
// // // name:"zakia"
// // // }
// // // // structural type: structural typing ma extra features add kr skty hn lkn kam nhi
// // // interface deal1{
// // // food:string;
// // // }
// // // interface deal2{
// // // food:string;
// // // drink:string
// // // }
// // // let shafeyorder: deal1 ={
// // //     food:"biryani",
// // // };
// // // let zimalorder:deal2 = {
// // //     food:"karahi",
// // //     drink:"ishting"
// // // };

// // // let shafeytable:deal1 = zimalorder; //structural type extra features ko allow krti h
// // // // let zimaltable:deal2 = shafeyorder; //in this case strure is not completedtherefore error is held
// // // console.log(shafeytable)
// // // // Steal object: is ma extra properties accept kr lyta h
// // // let shafeytable1:deal1 = zimalorder; 
// // // // fresh object: ma extra poperties accept nhi krta
// // // let shafeyorder2: deal1 ={
// // //     food:"biryani",
// // //     // drink:"ishting" // error is held here
// // // };
// // // // today class 1/6/24
// // // // sync && Async
// // // // sync : is a time consuming: is ma srf aik hi kaam krna such as saalan bnana
// // // // Asyn is a time saving: such as at a time multiple task,jysy kitchen ma bartan khana wagerah sb aik saath krna

// // // // set timeout: isko hum delay krny kly use krty hn , is ma code pararallel ma chala jata h
// // // // console.log('i')

// // // // setTimeout(()=>{
// // // //     console.log('eat')
// // // // },10000)
// // // // let j=0;
// // // // for(let i=0; i<=1000000; i++){
// // // //     j+1
// // // // }
// // // // console.log('icecream')
// // // // console.log('I')
// // // // setTimeout(()=>{
// // // //     console.log('eat')
// // // // },0)

// // // // console.log('icecream');

// // // console.log('I')
// // // setTimeout(()=>{
// // //     console.log('eat')
    
// // // setTimeout(()=>{
// // //     console.log('icecream')
// // // },1000)
// // // },1000)
// // function orderpizza(preparecb: any ){
// //     console.log('placeorder')
// // setTimeout(() => {
// //     console.log('placing order')
// //     preparecb()
// // }, 3000);
// // }
// // function preparepiza(deliverycb: any){
// // console.log('preparing pizza');
// // setTimeout(() => {
// //     console.log ('prepared pizza ')
// //     deliverycb()
// // },3000);}
// // function delivery(){
// //     console.log(' pizza ready for delivering');
// //     setTimeout(() => {
// //         console.log (' pizza delivered ')
// //     },3000);
// //     }
// //     // promise use here, resolve is a function; callbackhell sy bachny kly hum promises use krty hn
// //     function orderpizzaprom(){
// //         return new Promise((resolve) =>{ //promise chain bnany kly use hota h
// //             setTimeout(() => {
// //              console.log ('order placed'); 
// //              resolve("") //jb tk resolve ko call nhi kryn gy ye chain ma nhi chaly ga
// //             }, 3000);
// //         })
// //     }
// //     orderpizzaprom().then(preparepiza).then(delivery); //.then  aik chain ma chalta h

// // orderpizza(preparepiza)

// // preparepiza(delivery)
// // let result = await orderpizzaprom()

// // object oriented programing:
// // is ma 2 cheazyn zarori hn: 1:object and 2:
// class house{
// housenumber:number = 1234;
// ownername:string;
// constructor(name:string, housenumber:number){
//     this.ownername =name;
//     this.housenumber = housenumber
// }

// }
// console.log(house)
// let h1 = new house("zakia", 65);
// console.log(h1);
// class house1{
//     doorsnum?:number
//     housenumber:number = 1234;
//     ownername:string; 
//     readonly cnicnum:number;
//     constructor( housenumber:number, name:string,  cnicnum:number,doorsnum?: number,){ //optinal parameters ko last ma define krty hn isy shoro ma nhi kr skty
//         this.doorsnum = doorsnum
//         this.housenumber = housenumber
//         this.ownername =name;
//         this.cnicnum = cnicnum
//     }
    
//     }
//     console.log(house)
//     let h2 = new house1( 1234,"zakia",4444444,5);
//     console.log(h2);
//     class girl{
//         name:string = 'zimal';
//         constructor(name:string)
//         {this.name = name;
//     }
// walk(){
//     console.log('walking')
// }
// eating(){
//     console.log(`${this.name}'eating pizza'`)
// }
// }
//     let d1 = new girl('shafey');
//     let d2 = new girl('shafey')
//     d1.walk();
//     d2.eating()
//     console.log();
//     // inheritance:
//     class humans{
//         name:string = 'zimal';
//         constructor(name:string)
//         {this.name = name;
//     }
//         walk(){
//             console.log('walking')
//         }
//         eating(){
//             console.log(`${this.name}'eating pizza'`)
//         }
//     };
//     let q1 = new humans('ayesha')
//     q1.eating()

//     class boy extends humans{
    
//         constructor(name:string, school:string){
//             super(name)
            
//         }
//         school(){
//             console.log('is a school girl')
//         }
//     }
//     let q2 =new boy('naila','ayesha');
//     q2.school();
// today class 29/6/24
// ASSIGNMENT#1
// QUESTION:
// write  a function check even odd that accept a number and print wether it is even or odd:
// solution:
function checkevenodd(value:number){
    if(value%2===0 ){
        console.log(`${value}  is an even number`)
    }
    else{console.log (`${value} is an odd number`)}
}
checkevenodd(67)
// ASSIGNMENT#2:
// question:
//  write  a function ArayOperation that create an array of nmber add a number to the end of the array remove the first number and 
//print the modified array.
// Solution
/*function arrayoperation(){
    let array:number[] = [1,2,3,4,5,6]
    array.push(7);
    array.shift();
    console.log(array)
}arrayoperation()
*/


function arrayoperation(){
let numbers:number[]=[1,2,3,4,5];

numbers.push(6);
numbers.shift();
console.log(numbers);

}
arrayoperation()
// assignment#3:
// write a function multiply the elements of an array by 2 and return the modified an array
// function array(){
//     let num = [ 1, 2,3, 4,5]
//     num.forEach((num)=> {console.log(num*2)})
// }
// array()


// function multiply(num:number[]){
//     const newarr:number[]=num;
//     console.log(newarr);
//     for(let i=0; i<num.length; i++){
//         newarr[i] = newarr[i]*2;
//     }
//     console.log(newarr)
// }
// multiply([2,8,9,5,12])
// Assignment#4:
// question:
// Write a function findlargest that accept an array of numbers and return the largest number 
// solution:
// function largestnum(arr:number[]){
//     let largest:number=0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest=arr[i] ;
//         }
       
//     }
//    return largest
// }
// let num:number[] = [23,65,2,7,98,456]
// console.log(largestnum(num))

// for(let i =0; i<=100; i++){
//     if(i%2 === 0){
//         console.log(`${i} is an even number`);
//     }
//     else{
//         console.log(`${i} is an odd number`)
//     }
// }
// today class 7/6/2024:
// today topic is module:
// modules ko hum reuse kly bnaty hn 
//jub hum koi bra program likhty hn to humyn smjh nhi a rhi hoti to hum alag alag files bnaty hn or phr usy import kr dyty hn 
// jis file ma hum pogram likhty hn us ma hum export krwaty hn or jis file ma use krty hn usy ma import krwaty hn
// let population:string = "435, 657, 786" // pak.js file
// export default population 
// export ki two types hn :
// 1:default export: aik file k ander srf aik hi default export hoga 
// default export ko import krty hn to us ma {}curley brackets use nhi krty // import krty waqt iska name change kr skty hn
// 2:simple export: curley bracket use krty hn // aik sy zyada bna skty hn //iska name change nhi kr skty //agr name change krna h to humyn as ka use krna pry ga
// default export aik sy zyada nhi kr skty is liy hum ab cities ko esy export kryn gy
// export{cities} jb simple export krty hn to curley brackets use krty hn
// import population from "./pak.js"
// importi ind_pop from "./ind.js"
// import population {cities as pakistan_cities} from "./pak.js"
// importi ind_pop {cities as indian_cities} from "./ind.js"
// console.log('display population');
// console.log('pakistan population : ' pak_pop);
// console.log('pakistan population : ' ind_pop);
// console.log("indian cities are: " pakistan_cities );
// require: keyword ab use nhi hota ye phly use hota tha : // ab import export use hota h in acma version
// import * as 
// pori file import krney kly hum functional programing kryn gy // hum apna sara code aik functionn ya class ma likhyn gy or phr usko export kr dyn gy
// ASSIGNMENT: WRITE four function subtraction, divisio, multiplication & addition in a file and then export 
// export code /// make a file which we have use another files
export function add(num1:number, num2:number){
    console.log(num1+num2)
}
export function sub(num1:number,num2:number){
    console.log(num1-num2)
}
export function mul(num1:number, num2:number){
    console.log(num1*num2)
}
export function div(num1:number, num2:number){
console.log(num1/num2)
}
// import code : /// writen in our main file
// import {add,sub,mul,div} from "./module.js"
// add(5,8);
// sub(9,5);
// mul(9,4);
// div(8,2)
// ======= object:========
// let mydetails = {
//     name:'zakia',
//     age: 27,
//     roll: 'mother',
//     education:'bscs',
//     study: 'countinue',
//     responsibilities:'handling all over responsbilities which have; house,childs and education responsibilities'
// }
// console.log(mydetails);
// console.log(`my name is ${mydetails.name}, i have ${mydetails.age} years old, i'm a ${mydetails.roll}`);

// ====== object with annotation: ==========
let mydetails:{
    name:string;
    age: number;
    roll: string;
    education:string;
    study: string;
    responsibilities:string;
} = {
    name:'zakia',
    age: 27,
    roll: 'mother',
    education:'bscs',
    study: 'countinue',
    responsibilities:'handling all over responsbilities which have; house,childs and education responsibilities'
}
console.log(mydetails);
console.log(`my name is ${mydetails.name}, i have ${mydetails.age} years old, i'm a ${mydetails.roll}`);
//======== interface ========
interface deta{
    name:string;
    age: number;
    roll: string;
    department:string;
    education:string;
    study: string;
    responsibilities:string;
}
const student:deta = {
    name:'ayesha',
    age:24,
    roll:'student',
    department:'it',
    education:'bscs',
    study:'exit',
    responsibilities: ' working on project',
}
console.log(student);
let detstud = `${student.education} + ${mydetails.responsibilities}`
console.log(detstud);
// ----type alias -----
type zimal = {
    name:string;
    age:number;
    stage:string;
}
const zim = {
    name:'zimal fatima',
    age:1.3,
    stage:'on learnig'

}
console.log(zim)
type deta1 = {
    name:string;
    age: number;
    roll: string;
    department:string;
    education:string;
    study: string;
    responsibilities:string;
     zakia():number;
     zimal1():number;
        
}
// ==== intersection type ===
type detazim = zimal & deta1 &{
    
}
const deta2:detazim = {
    name:'zimal fatima',
    age:1.3, 
    stage:'on learnig',
    roll:'student',
    department:'it',
    education:'bscs',
    study:'exit',
    responsibilities: ' working on project',
    zakia: function(){
        let a=10;
        let b=20;
        return a+b && this.age;
    },
    zimal1: function(){
        return this.age ;
    }
}
console.log(deta2.zakia());
// console.log(deta2);