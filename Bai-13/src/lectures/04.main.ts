// Primitive type
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

// Object type
type Student = {
    readonly id: number;
    name: string;
    age?: number; // optional
    }
    
    interface Student2 {
    readonly id: number;
    name: string;
    age?: number; // optional
    }
    
    const studentA: Student = {
    id: 1,
    name: 'Alice',
    }
    const studentB: Student = {
    id: 2,
    name: 'Bob',
    age: 18,
    }

//Intersection type
interface BusinessPartner {
    name: string;
    credit: number;
    }
    interface Identity {
    id: number;
    name: string;
    }
    interface Contact {
    email: string;
    phone: string;
    }
    type Employee3 = Identity & Contact;
    type Customer = BusinessPartner & Contact;

// interface way
interface Employee2 extends Identity, Contact {}
interface Customer1 extends BusinessPartner, Contact {}

type Customer2 = BusinessPartner & Contact;
let c: Customer = {
name: 'ABC Inc.',
credit: 1000000,
email: 'sales@abcinc.com',
phone: '(408)-897-5735'
};
type Employee = Identity & BusinessPartner & Contact;
let e: Employee = {
id: 100,
name: 'John Doe',
email: 'john.doe@example.com',
phone: '(408)-897-5684',
credit: 1000
};