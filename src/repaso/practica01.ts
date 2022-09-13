
interface direccion{
    calle:string,
    pais:string,
    estados:string,
    numero:number
}
interface utlAlumno{
    matricula?:number|string,
    nombre:string,
    edad:number,
    direccion:direccion
    mostrarDireccion:()=>void;
}



const pruebaAlumno:utlAlumno={
    nombre:'Pablo',
    edad:22,
    direccion:{
        calle:'Colines',
        pais:'México',
        estados:'Guanajuato',
        numero:217

    },
 mostrarDireccion(){
    return this.nombre +','+this.direccion.estados+','+this.direccion.pais
}

}

console.log(pruebaAlumno.mostrarDireccion);