// console.log("hello gaurav")

// let a =10;
// var b = 20;
// const c = 30;

// console.log(a, b, c)

//data types

// let a = 90; //number
// let b = "Gaurav" ; //string
// let c = true ; // boolean
// let d = undefined ; 
// let e = null ;
// let f = BigInt(999999999999999087);
// let g = Symbol("hello");
// console.log(typeof a , typeof b ,typeof c , typeof d, typeof e, typeof f ,typeof g );



//null vs undefined

//undefiened:-
/*
let name;
console.log(name);*/


/*
let n = null; // reserved keyword
console.log(n);
*/
//non premitive 
//object

// let person = {

//     firstName : 'Gaurav',
//     age: 25
// };
// person.age=26;
// person.lastName = 'Sharma';
// console.log(person);



// airthmetic operator (+,-,*,)
//assingment operator (+= . -= . =)
//comparision Operator (== .> , < , === )
//logical operator (and && , or || , not !)


//implicit type conversion 

// console.log(25+"Gaurav"); // string + number = string;
// console.log(25+"44");
// console.log(34 == "34"); //type coision // js itself convert in string



//explicit type conversion

// let a =10;
// let s = String(a);   // we can convert it in anything
// console.log(typeof s);


// ==============================================================================
// 2nd vdo 

                   //controlled Statements
//if else
//switch case 
//For loop

//Function  declare and calling

// function gaurav(){
//     console.log("hi i am in function declare state");
// }

// gaurav(); //calling function





// function gaurav(name){
//     console.log(name);
// }

// gaurav("hi i am gaurav function you can use me to log anything"); //calling function



// function gaurav(way3){
//     return way3;
// }

// let ans = gaurav("hiiii"); //calling function

// console.log(ans);


//Scoping

//Global Block {} and Functio Scope 



//Scoping Chain
//lexical Scoping  //Chaining of function me variable ko find krna

//clouser == function + lexical Scope




// ==============================================================================
// 3nd vdo



// Array and its methods




//push //add element in last
// pop //remove from last

//unshift      //add element in starting
//Shift        //remove from first



//Slice (f , S) f included s excluded 
//Slice (f)   FOR single value start with f
//slice (-2) start taking from back
//slice (-2 , -3) it will not be taken


//Splice(startin from , delete number of element, replace with)


//Find

// ex
/*
let player = [

    {name:"gaurav" , score:100 },
    {name:"renu" ,score:20 },
    {name:"khushi" ,score:21 }
];
//find
let info = player.find(function(obj){
     return obj.score==100;
})
console.log(info);  */


// //sort
// let player = [

//     {name:"gaurav" , score:100 },
//     {name:"renu" ,score:20 },
//     {name:"khushi" ,score:21 },
//     {name:"radha" ,score:50 },
//     {name:"yasodha" ,score:26 },
//     {name:"adi" ,score:28 },
//     {name:"muskn" ,score:29 }
// ];

// delete player[2]
// console.log(player);       //delete but empty item left

// let amp = player.sort();
// console.log(amp)              //it will not work 


//Sort in assending
// player.sort(function(obj1 , obj2){
//     return obj1.score - obj2.score;
// })
// console.log(player)


//sort in decending
/*
player.sort(function(obj1 , obj2){
    return obj2.score - obj1.score;
})
console.log(player)x
   */



//pop //shift //delete difference




// ==============================================================================
// 4th vdo  
// String

// total 256 charactor in js language 
 
let S1 = 'Gaurav Sharma';
let S2 = "Gaurav Sharma1";
let S3 = `Gaurav Sharma2`;


// console.log(S1.charAt(3));

// console.log(S1+S2)
// console.log(`${S1} ${S2}`);
// 
// console.log(S1.toLowerCase());
// console.log(S1.toUpperCase());


// //multiple line string
// let st = "Dear students,\
// We trust this message finds you well.\
// The live doubt support session has started, and you are welcome to join anytime between 11:00 am to 6:00 pm. Our team is here to assist you with any query related to your module. Please take a moment to jot down the doubts you are facing, and we'll address them once the doubt session begins.\
// :pushpin: Important Note: The live doubt support session can be accessed through the Geekster Platform.\
// Wishing you a fruitful learning experience!\
// Best regards"


// let keyword = "fruitful";
// console.log(st.search(a));

// // console.log(st.search(keyword)); if present then gives index other -1.
// // console.log(st)


// //replace
//  let keyword = "fruitful";
//  let replaceWord ="fruitfully"
//  console.log(st.replace(keyword, replaceWord));




//Substr ,subString , slice 


// let portionString = st.slice(0 , 10)
//strt and ending index (-ve from backside)

// let portionString = st.substring(0 , 10)
// let portionString = st.substr(4 , 10);
// console.log(portionString + "...read More")


// Note 1 :- Slice can take -ve values Substring not taken if we put -ve argument or value in subString it automatic consider that from 0 index .
// 2:- in subStr = taking starting index and number of charactore as in input parameter




// ==============================================================================
// vdo :5

//object and its operation


// let store = {
//    catagory : {
//     car : "bmw",
//     bike : "avenger",
//     house : "5bhk "
//    } ,

//   Owner :" Gaurav",
//   age : '25',
//   bank : [ 'sbi' , 'icici' , 'kotak' , 'pnb' ]
// }

// let output = store.Owner;
// store.bank[4] = 'india';
// delete store.bank[3] ;
// let output = store.bank;
// console.log(output);


// for (var obj in store) {

//  console.log(obj + ":-" +store[obj] );
// } 
// console.log(store.catagory);

// let key = "Owner" ;
// console.log(store.key);   //undefine output
// console.log(store[key]);  //Gaurav output


// Note :-
// use ' . ' notation if we alredy know the key use '[]' notation if we dont know about key.


// ==============================================================================
// vdo :6

// Function and Execution Context 

//Simple Function

// function addToCart(product){
//     console.log( `Product ${product} is added in add to card `)
// }

// addToCart("mobile");
// addToCart("blazer");
// addToCart("noodles");


//Anonymous Function
// let add = function(){
//     console.log(6+4);
// }
// // console.log(add());
// add();


// Higher order  function
//a function taking another function as an argument and returning a new function .

//returning a function as a value from that 

// function returnFunction(){
//     return function(){
//         console.log("hii");
//     }
// }

// let rf = returnFunction();
// rf();
// console.log(rf);


// or

// returnFunction()();



// //passing a function as argument

// function getCapture(abc){
//     console.log(abc);
//     abc();
// }

// getCapture(function (){
//     console.log("i am captured");;
// });




// real life example of HOC

// function calculate(operation, initialValue, numbers ){

//     let total = initialValue;
//      for(const number of numbers){
//         total = operation(total , number)
//         console.log(total);
//     }
//     return total ;
// }

// function sum(n1 ,n2){
//     return n1 + n2
// }

// function multiply(n1 ,n2){
//     return n1 * n2
// }

// calculate(sum , 0 , [1,2,3,4,5]);
// calculate(multiply , 1 , [1,2,3,4,5]);



//Arrow Function

// let hello = ()=>{
//     console.log("hello world");
// }
// console.log(hello);
// hello();


// let hello2 = ()=> console.log("hello world2"); // we can use this also if there is only one line output in arrow function.
// hello2()


// let sum = (a, b) => {
//    console.log(a + b);
// }
// sum(10 ,20);


// let multiply = (c, d) => {
//     return c*d ;
//  }
// let ans = multiply(2 ,20);
// console.log(ans);

// let multiply = (c, d) => c*d ;   //shoter way to write function
// let ans = multiply(2 ,20);
// console.log(ans);




//immidatly invoke function expression   //(we dont needd to call it or we need to call it immidiatly )
 
// (function (){
//     console.log(4+6);
// })();


// (()=>{
//     console.log(4+1);
// })();





// var a = 10;
// function hello(){
//    a = 20;  //use let and var for solving confucion while assinging a = 20
//     console.log('hye  '+ a);
// }
// hello()
// console.log(a);









// in iffi think answer before execute following.

// var  a =10;
// (function (a) {
//     a = 50;
//   console.log(a);
// })(a);
// console.log(a);






//Theory part 

//execution Context  (EC)
// two types global (GEC) and function (FEC)

//global ==  memory execution phase + code execution phase (CEP) {include FEC}

// function (FEC) = memory creation phase(MCP)+ code execution phase (CEP)







// ==============================================================================
// vdo :7

// Understanding HOFs
// baised on //key concepts //functional programmig

//for Each loop

// let numbers = [1,2,3];
// numbers.forEach((value , index , numbers)=>{
// console.log(value ,index,numbers);
// });

let products = [
    {id:1 , name:"sofa", prise:5000},
    {id:2 , name:"payal", prise:10000},
    {id:3 , name:"wrappr", prise:200},
    {id:4 , name:"tea", prise:300},
    {id:5 , name:"baam", prise:100},
];

// products.forEach((product)=>{
//     console.log(`product Id:- ${product.id}`);
//     console.log(`product name:- ${product.name}`);
//     console.log(`product prise:- ${product.prise}`);
// }
// )


// products.map((product)=>{
//     console.log(`product Id:- ${product.id}`);
//     console.log(`product name:- ${product.name}`);
//     console.log(`product prise:- ${product.prise}`);
// }
// )



//NOTE :- ForEach and Map result is same but main differece is map will return a new array  and for each not returning new array .
// map:-vdo time 15 min

// filter and map both return new array 

// let filteredProduct = products.filter((product)=>{
//     return product.prise == 100; //we can use ( > < == != )
// }
// );
// console.log(filteredProduct)






//reduse :- it gives ans in single value


let totalAmount = products.reduce((total , product)=>{
    return  total + product.prise;
}, 0);
console.log(totalAmount);