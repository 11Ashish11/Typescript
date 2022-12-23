console.log("Hello World !!");
let x = 5;
// Now if you hover on x, it will tell you that the data type of this is number
// This is called type inference and this is one of the most powerful feature of typescript
//Ok but now suppose you have not intialized this x with some number, in that case, use the below syntax.
let y;
let z;
let A;
// By any we can assign it any data type
// Other data types which are commonly used are boolean, Date and String[]
// But now suppose you want to change the datatype of any previosuly defined variable to soemthing else
// In this case, we can typecase it.
z = 3;
// Difference between Class and Interface is, Interface will only get used at compile time and never at runtime
let AudiA8;
// We can assign it like this 
AudiA8.availableInIndia = true;
AudiA8.horsePower = 1500;
let AudiA6 = {
    name: "AudiA6",
    horsePower: 1400,
    price: 1.2,
    availableInIndia: true,
    launchDate: new Date("01-01-2000"),
    //By intializing like all the fields should be mandatorily filled. 
    // Only the ones which are explicitly specified by "?" can be left unfilled.
};
