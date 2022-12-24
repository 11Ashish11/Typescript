console.log("Hello World !!");

let x = 5;
// Now if you hover on x, it will tell you that the data type of this is number
// This is called type inference and this is one of the most powerful feature of typescript

//Ok but now suppose you have not intialized this x with some number, in that case, use the below syntax.
let y: Number;
let z: String;
let A: any;

// By any we can assign it any data type
// Other data types which are commonly used are boolean, Date and String[]

// But now suppose you want to change the datatype of any previosuly defined variable to soemthing else
// In this case, we can typecase it.

z = 3 as any;
// If I had not written this "as any", this would have thrown error. But this case, its not.
// This will come handy many times while debugging test cases, so this will be very helpful.
// But ofcourse then by using this we are removing the point of using Typescript as this wont check errors here


// Creating Custom Types with Interfaces
interface Car {
    name: String;
    horsePower: number;
    price: number;
    availableInIndia: boolean;
    launchDate?: Date;  // here the question mark indicates wheather this feild is compulasary or not. 
    //clone(): boolean;   -----> basically we can also define methods inside the interface.
    // Read more about how to define interface later
    randomCharacter?: Date | String | BigInteger; //By this way we can have multiple types of datatypes also
    // assigned for a single variable
}

// Difference between Class and Interface is, Interface will only get used at compile time and never at runtime
// You can extend any other interface also by using the extends keyword, same as that in java


let AudiA8: Car;

// We can assign it like this 
AudiA8.availableInIndia = true;
AudiA8.horsePower = 1500;

let AudiA6: Car = {
    name : "AudiA6",
    horsePower : 1400,
    price : 1.2,
    availableInIndia: true,
    launchDate: new Date("01-01-2000"),
    //By intializing like all the fields should be mandatorily filled. 
    // Only the ones which are explicitly specified by "?" can be left unfilled.
}


//Enums can be used in the below 2 ways
enum MessiTeams {
    ARGENTINA,
    BARCELONA,
    PSG
}

enum NeymarTeams {
    BRAZIL = "brazil",
    BARCELONA = "barcelona",
    PSG = "psg",
}


// FUNCTIONS WITH TYPES

function clone(source: String): String {
    // Here source: String tells that we the paramter source type should always be String
    // and the later String implies that the return type should be String
    return Object.apply({}, source);
}

// But what if we want some generic type also
// In this case we can use GENERICS --> This is again one of the most powerful feature of Typescript

function cloneGeneric<T>(source: T): T {
    return Object.apply({}, source);
}

// Here, I have just used T as one single Type, we can also use more

function clone2Generic<T1, T2>(source: T1): T2 {
    return Object.apply({}, source);
}

const b = clone2Generic<String,Number>("ashish"); // So in cases, where we used more than 1 generic Types
// .. we have to specify the types here too.

// There is one other also main feature of this called generic Constrains.
// Read about it onine because I am too bored to do it now

//This generics is not just limited to functions, this can be applied to classes and interfaces also



// keyOf Operator
// This is kind of similar to instanceOf operator which you are aware of when you used in Java
// remember that CLMconf instanceof ExportConf ? 

// this below is one great use of TypeOf operator

function getValue<T>(source: T, property: keyof T) {
    return source[property];
}

// So now here incase of getValue suppose, you use some keyword which is not of TypeT, 
// then Typescript will start throwing error

//typeOf Operator
// This one is a javascript feature only and has nothing to do with typescript
// It is used to get the type of any variable;
var Ashish = "String";
console.log("The typeof ", Ashish, " is  :: ", typeof Ashish);


// Indexed Access Types
// We can get the Type of most properties with this Indexed Access Types
// You can read more about it here -> https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// This below is one example of Indexed Access Type
type INDEXED_ACCESS_TYPE = Car["name"];

// OMIT -> Utitlity
// Suppose you have a requirement where you want all the properties of one particualr interfaces expect 1 or 2 of that
// In that case, you have use the OMIT utility that this typescript provides.
// You can check the below link for examples of this method
// Also there are many other methods too, which typescript provides, You can read about it in this below documentation
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// There are some other utility methdos also like Partial, Pick, etc. 
// This can come very handy. You can read more on these in this course



// DECORATERS --> 
// This are metadata that you can add to your classes, getter , settters and more
// @log and @autorization are some of the decoraters we can use
// Basically at any point if you feel, there is some duplicate code, we can remove that code
// And use decorater there

// Problem with this is there is different implementation for JS and different implementation for Typescript
// So if your project has both js and ts code, you may want to skip that part till this is standarized for both


// In your tsCofig file, make this settings "experimentalDecoraters" as true to use it
// Read more about it in this article :: https://www.typescriptlang.org/docs/handbook/decorators.html
// Topics covered in the course :: 
/**
 * 1. Method decorators
 * 2. Decorater factory
 * 3. Class Decorator
 * 4. Property Decorator
 */