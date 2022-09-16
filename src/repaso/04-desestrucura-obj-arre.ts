//Destructuración de objetos y arreglos

interface Detalles{
    autor:string;
    anio:number;
}


interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:50,
    cancion:'Mañanitas',
    detalles:{
        autor:'Cepillin',
        anio:1900,
    }
}

const{cancion, volumen, segundo, detalles}=reproductor;
const{autor, anio}=detalles;

console.table('El nombre de la canción es: ' +  cancion);
console.table('El volumen actual es: ' +  volumen);
console.table('El segundo actual es: ' +  segundo);
console.table('El autor de la canción es: ' +  detalles.autor);


// Desarrollar con Areglos

const dbz:string[]=['Goku', 'Vegeta', 'Krillin', 'Yamcha'];
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);

const[p1, p2, p3, p4]=dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);


//Esta fue la clase de desestructura de objeto y arreglos