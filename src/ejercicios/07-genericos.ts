/*
{
    status: boolean;
    message: string;
    statusCode: number;
    result: [estados];
}

usuario = {
    nombre: string;
    apellido: string;
    edad: number;
}

estados = {
    tipo: string;
    id: number;
}
*/

function verTipo<T>(argumento: T): T {
    return argumento
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "prueba",
    genero: "aaa",
    edad: 10
}

const prueba = verTipo("Johan");
const prueba1 = verTipo(true);
const prueba2 = verTipo(1);
const prueba3 = verTipo(vaca);

console.log(prueba.toUpperCase);
console.log(prueba1);
console.log(prueba2);

export{};