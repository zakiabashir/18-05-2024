// // // // homework:
// // // // interfaces
// //homework  1:call stack, 2:event loop, 3: call back que
// // // // 2:structural typing in typescript
// // // //1: datatype: unknown / any
// // // // 2:explicit type casting
// // // //3: functions
// // // let age: unknown = true; // unknown ma koi bhi type value store kr skty hn lkn is ki value khin or ksi variable ma store nhi kr skty hn
// // // // when we use unknown?
// // // // agr hum khin or i mean ksi or computer sy data store krty hn to ho skta h hmyn us time pta na ho kh data type kia h us waqt hum unknown data type use kr skty hn
// // // let num1:any = "18"; // any k andar kuch bhi store kr skty hn or any ki values ko khin bhi store kr skty hn
// // // let result:number = num1 as number; // its means explicite type casting
// // // console.log(result)
// // // // explicit type casting: krney ky 2 methods hn
// // // // explicit type casting data type ko change krta h values ko nhi
// // // //1:this is a first method
// // // let result1:number = num1 as number; //this is a first method
// // // //2:this is a second method
// // // let result2:number = <number>num1 ; //this is a second method
// // // // functions
// // // // rest parameters: parameters k start ma ... 3dots lga dyn to ye rest parameters khlata h
// // // // console.log( ) bhi aik rest parameter h 
// // // function invite(...guest:string[]){
// // // console.log(guest)
// // // }
// // // invite("Ayesha","naila");
// // // // default parameters:
// // // function invite1(host:string,...guest:string[]){
// // //     console.log(guest)
// // //     console.log(`${host}`)
// // //     console.log(`our host is ${host} and guests are (${guest})`)
// // //     console.log(`${guest.join(" ")}`) //join array method use hota h join krny kly
// // //     console.log(`${guest.join("|")}`)    
// // // }
// // //     invite1("Ayesha","naila","amina","abiha");
// // //     // overloade function:
// // //     // ye login /signup jysi application ma istamal hota h
// // //     // agr ap ny oveloaded function bnany hn to uskly apko same name k aik sy zyada functions bnyn gy
// // //     // overloaded function ma {} curley braces use nhi krty
// // //     function add(arg1:string, arg2:string):string; //overloade function
// // //     function add(arg1:number, arg2:number):number; //overload function
// // //     function add(arg1:number, arg2:string):string;
// // //     function add(arg1:boolean, arg2:boolean):boolean; //overload function
// // //     function add(arg1:any, arg2:any){ //main function
// // //         return arg1 + arg2
// // //     };
// // //     console.log(add("22" , "45"));
// // // console.log(add(22,54));
// // // console.log(add(22,"56"));
// // // console.log(add(true,false));
// // // // string case functions:
// // // let firstname = "Zakia";
// // // firstname.toUpperCase();
// // // console.log(firstname.charAt(0).toUpperCase() + "akia"); // for being first capital letter
// // // console.log(firstname.toUpperCase()); //1st function :upper case :ZAKIA
// // // console.log(firstname.toLowerCase()); //2nd function: lowercase: zakia
// // // console.log(firstname.length);
// // // // .fix function: set it to decimal point
// // // let price =18;
// // // console.log(price.toFixed(2));
// // let visit = 'sindh';
// // if(visit === 'sindh'){
// //     visit = 'karachi';
// // }
// // if (visit === 'sindh'){
// //     console.log('visit karachi');
// // }
// // else{
// //     console.log('visit port grand')
// // }
// // let saturday = 'gym';
// // let sunday = 'yoga';
// // if(saturday === 'gym'){
// //     sunday = 'rest';
// // }
// // if(sunday === 'rest'){
// //     console.log('its rest day');
// // }
// // else{
// //     console.log('lets workout')
// // }
// // let mycar = 'toyota'; mycar = 'honda'; mycar = 'KIA'; 
// // if (mycar === 'toyota'){
// //     console.log('toyota');
// // }
// // if(mycar === 'honda'){
// //     console.log('honda');
// // }
// // if(mycar === 'KIA'){
// //     console.log('KIA');
// // }
// // let salam:any;
// // if(salam === undefined){
// //     console.log('assalam-o-aleikum')
// // }
// // else{
// //     console.log('waleikumsalam')
// // }
// // let myvar = null;
// // if(typeof myvar !== 'undefined' && myvar !== null){
// //     console.log('myvar is defined and not null');
// // }
// // else{
// //     console.log('myvar is either undefined or null');
// // }
// // let a = [100,200,300];
// // let b = "ali";
// // if(a.length === b.length){
// //     console.log('theak hai');
// // }
// // else{
// //     console.log('galat hai')
// // }
// // let x:number = 0;
// // if(x++){
// //     console.log('x is truthy');
// // }
// // else{
// //     console.log('x is falsy')
// // }
// // let pass:any = '123';
// // let emil:any = 'xyz@email.com';
// // if(emil === 'xyz@email.com'){
// //     if(pass === 123){
// //         console.log('success')
// //     }
// //     else{
// //         console.log('fail')
// //     }
// // }
// // else{
// //     console.log('email is incorrect')
// // }
// // null:
// // let a:null | number = null;
// function divide(a:number, b:number){
//     let ans = 0
//     ans = a/b
//     if(b == 0)
//        { return null}
//     return ans
// }
// let a = divide(10,0);
// if(a != null)
//     console.log(a);
//     else
//     console.log("invalid operation")
// // narrowing:
// let pass:string | number ; 
// pass = "zakia";
// console.log(pass.toUpperCase()) //yhan to hum ny union type use ki h lkn console ma string type bta rha q is liy hum ny ussy value assign ki string ma
// pass = 2345;
// console.log(pass.toFixed());
// console.log(Math.random()*2)
// let newage = Math.random() > 0.6 ? "khan": 60
// console.log(newage);
// console.log(typeof newage);
// if(typeof newage === "string"){
//   console.log ( newage.toUpperCase())
// }
// else{
//     newage
// }
// //type ilyas: is ma = ka use krty hn
// type Person={
//     name:string;
// }
// //interface:is ma  = sign nhi lgta
// interface IPerson{
//     name:string;
// }
// let Person : IPerson = {
// name:"zakia"
// }
// // structural type: structural typing ma extra features add kr skty hn lkn kam nhi
// interface deal1{
// food:string;
// }
// interface deal2{
// food:string;
// drink:string
// }
// let shafeyorder: deal1 ={
//     food:"biryani",
// };
// let zimalorder:deal2 = {
//     food:"karahi",
//     drink:"ishting"
// };
// let shafeytable:deal1 = zimalorder; //structural type extra features ko allow krti h
// // let zimaltable:deal2 = shafeyorder; //in this case strure is not completedtherefore error is held
// console.log(shafeytable)
// // Steal object: is ma extra properties accept kr lyta h
// let shafeytable1:deal1 = zimalorder; 
// // fresh object: ma extra poperties accept nhi krta
// let shafeyorder2: deal1 ={
//     food:"biryani",
//     // drink:"ishting" // error is held here
// };
// // today class 1/6/24
// // sync && Async
// // sync : is a time consuming: is ma srf aik hi kaam krna such as saalan bnana
// // Asyn is a time saving: such as at a time multiple task,jysy kitchen ma bartan khana wagerah sb aik saath krna
// // set timeout: isko hum delay krny kly use krty hn , is ma code pararallel ma chala jata h
// // console.log('i')
// // setTimeout(()=>{
// //     console.log('eat')
// // },10000)
// // let j=0;
// // for(let i=0; i<=1000000; i++){
// //     j+1
// // }
// // console.log('icecream')
// // console.log('I')
// // setTimeout(()=>{
// //     console.log('eat')
// // },0)
// // console.log('icecream');
// console.log('I')
// setTimeout(()=>{
//     console.log('eat')
// setTimeout(()=>{
//     console.log('icecream')
// },1000)
// },1000)
function orderpizza(preparecb) {
    console.log('placeorder');
    setTimeout(() => {
        console.log('placing order');
        preparecb();
    }, 3000);
}
function preparepiza(deliverycb) {
    console.log('preparing pizza');
    setTimeout(() => {
        console.log('prepared pizza ');
        deliverycb();
    }, 3000);
}
function delivery() {
    console.log(' pizza ready for delivering');
    setTimeout(() => {
        console.log(' pizza delivered ');
    }, 3000);
}
// promise use here, resolve is a function; callbackhell sy bachny kly hum promises use krty hn
function orderpizzaprom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('order placed');
            resolve(""); //jb tk resolve ko call nhi kryn gy ye chain ma nhi chaly ga
        }, 3000);
    });
}
orderpizzaprom().then(preparepiza).then(delivery); //.then  aik chain ma chalta h
orderpizza(preparepiza);
preparepiza(delivery);
let result = await orderpizzaprom();
export {};
