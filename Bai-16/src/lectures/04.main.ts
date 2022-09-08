interface List<T> {
    length: number;
    [index: number]: T;
}

const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['easy', 'frontend'];
numberList[0];
numberList[1];
numberList[2];

interface Student {
    id: number;
    name: string;
    }
    const numberList2: Array<number> = [1, 2, 3];
    const wordList3: Array<string> = ['easy', 'frontend'];
    const studentList: Array<Student> = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    ]

    interface Student {
        id: number;
        name: string;
        }
        interface List<T> {
        length: number;
        }
        const numberList5: List<number> = [1, 2, 3];
        const wordList4: List<string> = ['easy', 'frontend'];
        const studentList6: List<Student> = [
        { id: 1, name: 'easy' },
        { id: 2, name: 'frontend' },
        ]

console.log(typeof 'easy frontend'); // 'string'
console.log(typeof 123); // 'number'
console.log(typeof false); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on
 
interface Student {
    id: number;
    name: string;
    }
    type MappedTypes = {
    [Key in keyof Student]: boolean;
    };