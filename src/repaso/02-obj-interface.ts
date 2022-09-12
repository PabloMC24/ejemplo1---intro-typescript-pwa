//Podemos usar Objetos, arreglos, interfaces, entre otras materias

let amaterno:string | number;
amaterno='Ontiveros';
amaterno=100;

let mascotas=['perro', 'gato', 100, true];
let tem2:(boolean|number|string)[]=['rata',100];
tem2.push(200);

let acciones:string[]=['dormir', 'comer', 'volar'];

//Interface es un tipo de dato en TS en donde establecemos las propiedades y tipados especifico
interface Alumno{
    matricula:number|string,
    nombre3:string;
    apaterno2:string;
    acciones?:string[]; // Al marcar con interogación es una manera de llamarlo opcional
    email:string;
}

const alumno:Alumno={
    matricula:18000240,
    nombre3:'Pablo',
    apaterno2:'Luna',
    email:'manag@hotmail.com'
}

alumno.nombre3='Dario';
console.table(alumno);