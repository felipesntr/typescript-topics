const unk: unknown = '';
const str: string = unk as string;

interface User {
    name: string;
}

// const user: User = {} as User;
// const user: User = <User>{};
const user: User = {
    name: ''
}

const num: number = 10;
const str_1: string = num as unknown as string; // bad practice.

(() => {
    console.log("t");
})()