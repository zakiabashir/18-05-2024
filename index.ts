#! /usr/bin/env node
import inquirer from "inquirer";
// homework:
// interfaces
// 2:structural typing in typescript
//1: datatype: unknown / any
// 2:explicit type casting
//3: functions

let age: unknown = true; // unknown ma koi bhi type value store kr skty hn lkn is ki value khin or ksi variable ma store nhi kr skty hn
// when we use unknown?
// agr hum khin or i mean ksi or computer sy data store krty hn to ho skta h hmyn us time pta na ho kh data type kia h us waqt hum unknown data type use kr skty hn
let num1:any = "18"; // any k andar kuch bhi store kr skty hn or any ki values ko khin bhi store kr skty hn
let result:number = num1 as number; // its means explicite type casting
console.log(result)
// explicit type casting: krney ky 2 methods hn
// explicit type casting data type ko change krta h values ko nhi
//1:this is a first method
let result1:number = num1 as number; //this is a first method
//2:this is a second method
let result2:number = <number>num1 ; //this is a second method
// functions
// rest parameters: parameters k start ma ... 3dots lga dyn to ye rest parameters khlata h
// console.log( ) bhi aik rest parameter h 
function invite(...guest:string[]){
console.log(guest)
}
invite("Ayesha","naila");

// default parameters:
function invite1(host:string,...guest:string[]){
    console.log(guest)
    console.log(`${host}`)
    console.log(`our host is ${host} and guests are (${guest})`)
    console.log(`${guest.join(" ")}`) //join array method use hota h join krny kly
    console.log(`${guest.join("|")}`)    
}
    invite1("Ayesha","naila","amina","abiha");
    // overloade function:
    // ye login /signup jysi application ma istamal hota h
    // agr ap ny oveloaded function bnany hn to uskly apko same name k aik sy zyada functions bnyn gy
    // overloaded function ma {} curley braces use nhi krty
    function add(arg1:string, arg2:string):string; //overloade function
    function add(arg1:number, arg2:number):number; //overload function
    function add(arg1:number, arg2:string):string;
    function add(arg1:boolean, arg2:boolean):boolean; //overload function
    function add(arg1:any, arg2:any){ //main function
        return arg1 + arg2
    };
    console.log(add("22" , "45"));
console.log(add(22,54));
console.log(add(22,"56"));
console.log(add(true,false));
// string case functions:
let firstname = "Zakia";
firstname.toUpperCase();
console.log(firstname.charAt(0).toUpperCase() + "akia"); // for being first capital letter
console.log(firstname.toUpperCase()); //1st function :upper case :ZAKIA
console.log(firstname.toLowerCase()); //2nd function: lowercase: zakia
console.log(firstname.length);
// .fix function: set it to decimal point
let price =18;
console.log(price.toFixed(2));
