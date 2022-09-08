interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

// Readonly<Type>
interface Todo {
    title: string
}  
    const todo: Readonly<Todo> = {
    title: "Delete inactive users"
}
//  todo.title = "Hello"

// Record<keys, type>
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record< CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian"},
    boris: {age: 5, breed: "Maine Coon"},
    mordred: {age: 16, breed: "british Shorthair"},
};
cats.boris;

// Pick<Type, Keys>
interface Todo2 {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = Pick<Todo2, "title" | "completed">

const todo5: TodoPreview = {
    title: "Clean room",
    completed: false
}
todo2
// Omit<Type, Keys>
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}
type TodoPreview3 = Omit<Todo, "description">;

const todo3: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
todo;