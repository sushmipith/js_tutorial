//----------- Javascript Console API
console.log("Hello world, this is printed in the console"); //prints in console
document.write("This writes in the body of the website") // but avoid this
console.warn("This warns in the console, it's in yellow");
console.error("This shows error in the console, it's in red");
console.log("Can print number like", 4 + 5, "this, but if done in quotation it will be string like", "4+5");
//alert("this is alert, which pops up when you load the site") 
//---------------- Using VAraibles---------------------

/*
two types of data types in JS are:
1. Primitive DataType: undefined, null, number , String , Boolean, Symbol
2. Reference Data Types: Arrays, Obejcts

Sometime number can be string too, blue xa vane number, black is string
*/

//integer
var num1 = 34;
var num2 = 56;
console.log(" this is num1 + num2:", num1 + num2);

//string
var str1 = "this is string 1";
var str2 = 'this is string 2';
console.log(str1 + str2);


//boolean
var bol1 = true;
var bol2 = false;
console.log("this is boolean varue either ", bol1, "or", bol2);


//undefined (variable cha tara aile defined gareko xaina or value chaina)
var und = undefined;
console.log(und);
var und1; // variable banayera matra xordyo vane ni undefined huncha
console.log(und1);


//null (dont keep anything)
var n = null;
console.log(n);



//Objects (Kind of array)
var marks = {
    Sushmi: 100,
    Sumo: 99,
    Sweety: 90,
    Snoopy: 100
}
console.log("this is Obeject", marks);

//Arrays
var arr = [1, 2, "String can be too", 4, 5]
console.log("prints all elements of array", arr);
console.log("printts index 0", arr[0]);
console.log("prints index 3", arr[3]);

//Operators
//Arithmetic Operators: +, -,*,/
var a = 30;
var b = 10;
console.log("value of a + b", a + b);
console.log("value of a - b", a - b);
console.log("value of a * b", a * b);
console.log("value of a / b", a / b);

//Assignment OPerator: +=, -=, *=, /=

var c = 100;
console.log("c+=2 is", c += 2); // cko value ma 2 add gara
console.log("c*=2 is", c *= 2); // c ko value ma 2 multiply gara, since mathi 2 add garesakyo c ma aba c = 102 * 2 huncha

//Comaprison Operator (returns boolean value)

var x = 100;
var y = 10;
console.log("x ==y ?:", x == y); // is x = y?
console.log("x >=y ?:", x >= y);// is x >= y?
console.log("x <=y ?:", x <= y);// is x <= y?

//Logical Operators ( &&(and), ||(or), !(not))


//--------------------Functions (DRY - Don't repeat yourself)---------------------

function avg(a, b) {
    console.log((a + b) / 2);
}

c1 = avg(4, 6);
c2 = avg(14, 16);

//------------------Conditional Statement----------------------

var age = 4;
if (age > 18) {
    console.log('you can drink');
}
else {
    console.log('you cant drink');
}



function kid(a) {

    if (a > 30) {
        console.log("Since you are ", a, "years, you can drink alcohol");
    }

    else if (a > 18) {
        console.log("Since you are ", a, "years, you can drink beer");
    }

    else if (a > 4) {
        console.log("Since you are ", a, "years, you can drink rasna");
    }


    else {
        console.log("drink water");
    }
}

kid(19);

//----------------------Loop---------------

var arr = [1, 2, 3, 4, 5]
//arr.legth = 5
console.log(arr);
for (var i = 0; i < 5; i++) {
    console.log(arr[i]);
}

// arr.forEach(function (element, index, array) {
//     array[1] = element * 10;
//     console.log("This is element", element, "This is index", index, "this is array", array);
// })

arr.forEach(function (element, index, array) { // for each function takes a function as its parameter and that fuction takes elemnt
    array[index] = element * 10;                   //index, array as parameter. for each le array ko euta euta elemet lidai iterate garxa
    console.log("this is element", arr[index]);
})

console.log("this is array", arr);
arr.forEach(function (element, index, array) {
    console.log("This is element", element, "This is index", index, "this is array", array);
})

//-------------While Loop------------------------

// difference betn while and do while is: while le condition check garxa paila, 
//do while chai 1st ma funa vaihalxa and condition paxi check garca,so do while chai ek choti chalxa chalxa


let j = 0; // euta block ma matra kam garxa ie: euta {} vitra
const con = 5; // constant can't be changed ie: con++,con =con+5 garna mildaina 
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


var k = 0;
do {
    console.log(arr[k]);
    k++;
}
while (k == arr.length);


//-------------Continue and Break ------------
//break garyo vane loop end nai huncha, Continue garyo vane tyo part skip vayera aru continue hucnha

var ar1 = ['a', 'e', 'i', 'o', 'u'];

console.log("this is break");
for (a = 0; a < ar1.length; a++) {
    if (a == 1) {
        break;
    }
    console.log(ar1[a]);

}

console.log("this is continue");
for (a = 0; a < ar1.length; a++) {
    if (a == 1) {
        continue;
    }
    console.log(ar1[a]);
}

console.log("thiis is return from for each");
ar1.forEach(function (e, i) {
    if (i == 1) {
        return;
    }
    console.log(e);
})

//---------------------- Array Methods ---------------------

let arr2 = ["fan", "can", 34, "null"];
arr2.pop();//last element pop(hatauxa) garxa
console.log(arr2);

arr2.push("push le last ma push huncha");
console.log(arr2);

// first ko element hatauxa
console.log(arr2.shift());

console.log(arr2.unshift("unshift le first ma gayera basxa"));

console.log(arr2.sort());//ascending order ma sort garxa 

console.log(arr2.toString());//converts array to string


//-------------------- String Methods-----------------

let stri1 = "Its me sushmi, hello me";
console.log(stri1.length); //string ko length print garxa (space ni count huncha)

console.log(stri1.indexOf("me")); // starting from index 0, me index 4 bata start huncha, it prints the index of the string 

console.log(stri1.lastIndexOf("me")); //me ko last ko me ko last ko index dinxa, 

console.log(stri1.slice(0, 4)); // slice garxa starting from 0 to 4-1

console.log(stri1.replace("sushmi", "sumo")); // stri1 ko sushmi is replaced to sumo

console.log(stri1.replace("me", "her")); //1st ko me matra her huncha


//-------------------------Date in js - --------------------------------

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());//time is given in seconds

console.log(myDate.getFullYear()); // gives year 

console.log(myDate.getDay()); // sun= 0, mon = 1 ..........

console.log(myDate.getMinutes());// minutes dinxa

console.log(myDate.getHours());// hours: 1 = 13, 2 = 14.......



//-------------DOM (Document Object Module)------------------

let elem = document.getElementById('click'); // id click vako html dinxa
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "yellow" //1st container class ko bg yellow huncha

console.log("this is innterHTML", elemClass[0].innerHTML); //Syntax HTML ko
console.log("this is innterTExt", elemClass[0].innerText); // j lekheko xa(DOM ma dehkne)

tn = document.getElementsByTagName('div'); //sap div dinmxa
console.log(tn);


tn[0].appendChild(createdElem); //tn[0] ie 1st div ma euta child (ie:createdelement) add gara
createdElem = document.createElement('p');//createdElement is the p ie paragraph
createdElem.innerText = "this is the created para"; // createdElement is the class whose innerHTML is this is the created para