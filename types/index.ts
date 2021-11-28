
// Types 
const str: string = '';
const bool: boolean = true;
const num: number = 0;
const sim: symbol = Symbol();
const nul: null = null;
const undef: undefined = undefined;


const arr: Array<string> = [];
const tuple: [number, string] = [1, 'Nome'];

enum Theme {
    Dark = 'dark',
    Light = 'light'
}

const any: any = true;


// Functions

function sum(a: number, b: number): number {
    return a + b;
}

function ret_never (): never {
    while(true) {}
}

