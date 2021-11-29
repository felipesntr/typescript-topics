// Intersection &
// Type alias

interface ContaPessoaFisica  {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    endereco: {
        rua: string;
        numero: number;
        cep: string;
    };
};

interface ContaPessoaJuridica {
    nome: string;
    cnpj: string;
    dataAbertura: Date;
    endereco: {
        rua: string;
        numero: number;
        cep: string;
    };
};

type ContaMEI = ContaPessoaFisica & ContaPessoaJuridica;

// Utility types

// https://api.github.com/users/felipesntr

interface GithubUserData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: any;
    blog: string;
    location: string;
    email: any;
    hireable: boolean;
    bio: any;
    twitter_username?: any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

/*
    type Partial<T> = { [P in keyof T]?: T[P]; }
    Make all properties in T optional
*/

// Partial - Make all properties in T optional
function printGithubBio(user: Partial<GithubUserData>) {
    console.log(user.name);
    console.log(user.bio);
}
// Pick - Make only the properties in T available
function printGithubBio2(user: Pick<GithubUserData, 'name' | 'bio'>) {
    console.log(user.name);
    console.log(user.bio);
}
// Omit - Make all properties in T unavailable
function printGithubBio3(user: Omit<GithubUserData, 'name' | 'bio'>) {
    console.log(user.login);
    console.log(user.id);
    console.log(user.node_id);
    console.log(user.avatar_url);
    console.log(user.gravatar_id);
    console.log(user.url);
    console.log(user.html_url);
    console.log(user.followers_url);
    // ...
}

interface GithubUserData_ {
    followers: number;
    following: number;
}
// Readonly - Make all properties in T readonly
// Readonly<T> = { readonly [P in keyof T]: T[P]; }
const newGithubUse: Readonly<GithubUserData_> = {
    followers: 55,
    following: 78,
}


interface BinarySearchTree {
    value: {
        id: number, value: any
    };
    left?: BinarySearchTree | undefined;
    right?: BinarySearchTree | undefined;
}


