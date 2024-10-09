// -------------------Infer types (Implicit Types) :- it's automatically identify  in this time u can see that error, the reason is if you use javascript you can siimply assing integer values from any variable 
// but typscript case you cant't assing interger it mean number value don't assing the string variable
// let username ="shamadsd";
// username = 1;
// let CarNmber = 4567;
// CarNmber ="suzuki"
// ----------------------------------Defining Types (Explicit types)
// if you are hover the any value area you can see the exact type , but you can also showing types
// let username: string ="shamadsd";
// let CarNmber: number = 4567;
// let isSuper :boolean =true;
// // if you are setting type is number in string that time you can see the error
// let skill: string[] = ["aa","gg","hh"]
// let count: number[] = [1,2,3,4]
// let emptyArray: []= [];
// // object
// // object setting time you must create your details type
// let person: {name: string, age:number , salary:number} ={
//     name: "shamad",
//     age: 21,
//     salary :50000
// };
// ----------------------------------------interface-----------------------------------
// you can easly setting types in inside the interface,first letter mustbe capital letter
// interface Details{
//     name: string;
//     age: number;
//     salary: number;
// }
// let student: Details ={
//     name: "shamad";
//     age: 21;
//     salary :50000;
// };
// // so you can easly align any object
// let student2: Details ={
//     name: "Ansaf";
//     age: 22;
//     salary :70000;
// };
// // function setting in interface
// interface Details2{
//     name: string;
//     age: number;
//     salary: number;
//     // function setting in interface
//     getName : ()=> void;
// }
// let student3: Details2 ={
//     name: "Ansaf";
//     age: 22;
//     salary :70000;
//     getName: ()=>{
//         console.log(this.age);
//     }
// };
// type :- this same to interface ,only change for "="equal sign
// type Details2 = {
//     name: string;
//     age: number;
//     salary: number;
//     // function setting in interface
//     getName : ()=> void;
// }
// let student3: Details2 ={
//     name: "Ansaf";
//     age: 22;
//     salary :70000;
//     getName: ()=>{
//         console.log(this.age);
//     }
// }
// ----------------------------------------------union/optional------------------
// union operator
// in this time you can easly setting any type in one variable using or operator || , but type script case you will be stting | only one arrow
// interface Details2{
// name: string;
//     age: number | string;
//     salary: number;
//     // function setting in interface
//     getName : ()=> void;
// }
// let student3: Details2 ={
//     name: "Ansaf";
//     age: "22";
//     salary :70000;
//     getName: ()=>{
//         console.log(this.age);
//     }
// };
// let skills: (string | number | boolean)[] = ["aa", "gg", "hh", 2, 6, 7, 5, true]
// optional 
/* this case you can setting any variable in optional , if you are setting interface and impliment values and types ,
and that time you dont calling in you object area so that time you can see that error so that time you impliment the optional
method "?" this is the sign
*/
// interface Details {
//     name ?: string;
//     age: number | string;
//     salary?: number;
//     // function setting in interface
//     getName: () => void;
// }
// let student: Details = {
//     // you can see this have not error
//     age: "22";
//     getName: () => {
//         console.log(this.age);
//     }
// };
// ------------------------------------------------------Functions-----------------------------------------------------------------
// types passing inside the function
// interface Details{
//     name: string;
//         age: number | string;
//         salary: number;
//     }
//     let student: Details ={
//         name: "Ansaf";
//         age: "22";
//         salary :70000;
//     };
//     let student1: Details={
//         name: "Askar";
//         age: 25;
//         salary :80000;
//     }
//     function getDetails(studentDetails:Details, student1Details:Details){
//         return studentDetails.name,
//         student1Details.salary;
//     }
//     getDetails(student,student1)
// next way is you can setting object inside the function and also create interface or inline 
// function getDetails({name, age}:{name:string; age :number}){
//     return name
// }
// getDetails({name:"shamnad", age:20})
// another way :- in this way if you want string or number ..ect methods that time you setting type outside of parameters
// why using void in getname function ? the reason is if i don"t retun in function that  u can use void
// interface Details {
//     name: string;
//     age: number | string;
//     salary: number;
//     getName?: () => void;
// }
// let student: Details = {
//     name: "Ansaf";
//     age: "22";
//     salary: 70000;
// };
// function getDetails(student: Details): string {
//     return student.name
// }
// const NewValue = getDetails(student)
// // so this time you have to show methods when ever you click "." dot if you setting number then you can see number methods
// NewValue.length
// // why using void in getname function ? the reason is if i don"t retun in function that  u can use void
// function getName(student: Details): void {
//     console.log(this.age);
// }
// getDetails(student)
// -------------------------------------------------named Types--------------------------------------------------------------
// we can also create types without typscript types
// so this time we using type we can't using interface reason is interface directly open in object so we can use type 
// this time i create new type
// type DetailsType = "completed" | "pending" | "failed ";
// // eg:-
// let currentStatus : DetailsType ="";
// // from api
// const response ="completed";
// if(response === "completed"){
//      currentStatus = "completed"
// }
// =========================================== ADVANCE TOPIC =======================================================================
// -----------------------------------------function Overloading-------------------------------------------------------------------
// function overloading :- typscript have "any" option this type can access any type like sting number boolean...etc but it's not good 
// so that time lost typscript power this act like javascript
// thiss time acess all types
// function add(num1:any, num2:any): any{
//     return num1+num2;
// }
// add(2,2);
// // we can see i just set string "2" that time we use any
// add("2",2)
// if i want specific type assining in code
// but this method using rare cases we can use GENERICS methods 
// function add(num1:number , num2:number):number;
// function add(num1:string , num2:string):string;
// function add(num1:any, num2:any): any{
//     return num1+num2;
// }
// add(2,2);
// add("2","2");
// ------------------------------------------Generics----------------------------------------------------------------------
// this diffenrent way ,this good method , without using function overloading , 
// genrics tag is "<>" so mostly developers using <T> this type this generic type We can setting any name inside the tag
// normal method
// function getAge(age:string|number):string|number{
//     return age
// } 
// getAge("20");
// getAge(20);
// genrics method
// this time we can see we can access any type but this time we can't know what type
// function getAge<T>(age:T):T{
//     return age
// } 
// // if i need to setup this is string, this is number , that ime we setup in<> inside the function call section
// getAge<string>("20");
// getAge<number>(20);
// so this is better way to function overloading
// next Example
// type StDetails ={
//     name:string,
//     age:number,
// }
// type AdDetails ={
//     firstName:string,
//     role:string,
// }
// const StudentDetail: StDetails ={
//     name:"Rahul",
//     age:20,
// }
// const AdminDetails: AdDetails ={
//     firstName :"Hacker",
//     role :"admin"
// }
// function getDetails<T>(details:T):T{
// return details;
// }
// const uservalue = getDetails<StDetails>(StudentDetail)
// const Adminvalue = getDetails<AdDetails>(AdminDetails)
// uservalue.age
// Adminvalue.role
// another way (remove repetaion & merge)
// type StDetails ={
//     name:string,
//     age:number,
// }
// this time we can acsess both type  have setting merge
// type AdDetails = StDetails &{
//     role:string,
// }
// const StudentDetail: StDetails ={
//     name:"Rahul",
//     age:20,
// }
// const AdminDetails: AdDetails ={
//     name :"Hacker",
//     age:30,
//     role :"admin",
// }
// if i use interface , 
// interface StDetails {
//     name:string,
//     age:number,
// }
// // using extends and remove & ,when ever i choose interface
// interface AdDetails extends StDetails {
//     role:string,
// }
// const StudentDetail: StDetails ={
//     name:"Rahul",
//     age:20,
// }
// const AdminDetails: AdDetails ={
//     name :"Hacker",
//     age:30,
//     role :"admin",
// }
// ---------------------------------------Enums----------------------------------------------------------------
// when ever the data not a string value if the values is number  you can use enum, enum working in run time
// type DetailsType = "completed" | "pending" | "failed ";
// IF i use small letter you have not issue, capitalize just standard mehtod
// enum DetailsType {
//     COMPLETED,
//     PENDING,
//     FAILED,
// } 
// // eg:-
// function getStatus(OrdeId :string ,Status:DetailsType){
//     console.log(OrdeId,Status);
// }
// getStatus("12345",DetailsType.FAILED)
// ---------------------------------------As Const----------------------------------------------------------------------------------
// this doing const for variable , this also know as type casting
var username = "shamnadsd";
// this time you can't change the value , reason is we did const you can change any type like as number ,as string . you can see the error below , 
username = "ansaf";
