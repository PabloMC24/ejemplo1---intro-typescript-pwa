interface utlAlumno{
    matricula:number|string,
    nombre:string,
    edad:number,
    direccion:string| number,
    calle:string,
    pais:string,
    estados:string,
    numero:number

}

const pruebaAlumno:utlalumno={
    nombre:'Pablo',
    edad:22,
    direccion:{
        calle:'Colines',
        pais:'México',
        estados:'Guanajuato',
        numero:217
    },
}
    mostrarDireccion(){
        return this.nombres ', '+this.direccion.estado+','+this.direccion.pais
    }
}