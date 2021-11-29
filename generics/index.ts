function print<T>(param: T): void {
    let value: T = param;
    console.log(value);
}

function printNumber(param: number): void {
    print<number>(param);
}

function useState<S extends number | string>(initialState?: S) {
    let state = initialState;
    function setState(newState: S) {
        state = newState;
        return state;
    }
    return { state, setState };
}


let state = useState<number>(0);