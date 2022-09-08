// Default function return type
function sayHello() {
    console.log('Hi Easy Frontend');
    }
    // ts: function sayHello(): void
    
    function sum(a: number, b: number) {
    return a + b;
    }
    // ts: function sum(a: number, b: number): number

    function sum(a: number, b: number): number {
        return a + b;
        }
        // ts: function sum(a: number, b: number): number
        
        function sum(a: number, b: number): number {
        return a + b.toString();
        }
        // ts error: Type 'string' is not assignable to type 'number'
// Optional and default parameter
// optional parameter
// this is how ts understand
// function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
    return Array.isArray(numberList) ? numberList.length : 0;
    }
// default parameter
// this is how ts understand
// function getLength(numberList?: number[]): number
    function getLength(numberList: number[] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
    }
// ts error: Parameter cannot have question mark and initializer.ts(1015)
    function getLength(numberList?: number[] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
    }
// function noop(): void
function noop() {
    return;
    }
// function noop(): void
    function  
type NewType = number & string; // never

function fail(msg: string): never {
throw new Error(msg);
}

function fn(x: string | number) {
if (typeof x === "string") {
// do something
} else if (typeof x === "number") {
// do something else
} else {
x; // has type 'never'!
}
}    