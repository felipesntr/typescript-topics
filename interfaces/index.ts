const obj: object = {}; // any dos objetos

interface IUser {
    name: string;
    age: number;
}

interface PrintUserReturn {
    name: string;
    age: number;
}

class user implements IUser {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

function printUser(user: user): PrintUserReturn {
    return {
        name: user.name,
        age: user.age
    }
}

const jhon = new user('Jhon', 30);
jhon.greet();



