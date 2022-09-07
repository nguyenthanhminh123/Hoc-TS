const studentA = { id: 1, name: 'Thanhminh' };
const studentB = studentA;
studentB === studentA; // true;
studentA === { id: 1, name: 'Thanhminh' }; // false

// usually, we just compare the id of two objects
const studentA = { id: 1, name: 'Alice' };
const studentB = { id: 1, name: 'Alice' };
studentA.id === studentB.id; // true

let student; // undefined
// fetch data
student = {
id: 1,
name: 'Alice',
}
// check truthy
if (student) {}

let studentd = {};
// fetch data
student = {
id: 1,
name: 'Alice',
}
if (student?.id) {}
 
