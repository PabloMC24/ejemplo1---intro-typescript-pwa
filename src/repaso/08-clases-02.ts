// Clases

class tabla{ //private, protected, public - Son las propiedades que se puede colocar la clase
    public numero:number;
    
    setNumero(a:number){ //
        this.numero=a;
        
    }

    getNumero():number{ //
        return this.numero;
    }

    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i} = ${i*this.numero}`)
        }

        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`);
            ++s;
        }
    }
    
}

let tabla1=new tabla();
tabla1.setNumero(7);
console.log('variable privada ' + tabla1.getNumero());
console.log('Esta es la tabla de 7 ' + tabla1.calcular());


//Esta fue la clase de las Clases con Funciones de impreción
