function logger(target: any){
    console.log(target.nome);
}

@logger
class User {
    nome: string;

    constructor(){
        this.nome = "teste";
    }
}