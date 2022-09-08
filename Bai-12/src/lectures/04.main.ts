// Các kiểu dữ liệu thường gặp
let count = 5;
count = 'five';
// type error: Type 'string' is not assignable to type 'number'.ts(2322)

// adding any, solved 🤣
let count: any = 5;
count = 'five'; // no error now :v

// three common primitive types: string, number and boolean
let count: number = 10;
let channelName: string = 'Easy Frontend';
let isActive: boolean = true;
// we can simply omit the type annotation
let count = 10;
let channelName = 'Easy Frontend';
let isActive = true;

//Literal types

let count: 1;
let channelName: 'easy';
let isActive: false;
let student: null;

let count: 1 = 2;
// error Type '2' is not assignable to type '1'

const count = 1; // const count: 1
const channelName = 'Easy Frontend'; // const channelName: 'Easy Frontend'
const isActive = false; // const isActive: false

let count = 1; // let count: number
let channelName = 'Easy Frontend'; // let channelName: string
let isActive = false; // let isActive: boolean

const student = {
id: 1,
name: 'Easy Frontend',
}
// this is how ts understand:
// const student: {
// id: number;
// name: string;
// }
// because the props of an object can be updated
student.name = 'Typescript is easy! :P'; // works

const student = {
id: 1,
name: 'Easy Frontend',
} as const
// this is how ts understand:
// const student: {
// readonly id: 1;
// readonly name: "Easy Frontend";
// }
// you now can't update props of this object
student.name = 'Typescript is easy, really?!';
// error: Cannot assign to 'name' because it is a read-only property.

const numberList = [1, 2, 3];
// ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const
// ts understand: const numberListAsConst: readonly [1, 2, 3]

Type Assertion

function getStatusName(state: 'active') {
console.log(state);
}
let s = 'active'; // let s: string
getStatusName(s)
// ts error: Argument of type 'string' is not assignable to parameter of
type '"active"'.ts(2345)
// solution 1
let s: 'active' = 'active'; // or const s = 'active'
getStatusName(s);

// solution 2
let s = 'active';
getStatusName(s as 'active')