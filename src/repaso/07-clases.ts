// Clases

class Persona{ //private, protected, public - Son las propiedades que se puede colocar la clase
    private nombre:string;
    private edad:number;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    } //Constructor de la classe: inicializa los elementos de la clase

    setNombre(a:string){ //
        this.nombre=a;
        
    }

    getNombre():string{ //
        return this.nombre;
    }


   private imprimir(){// Esto es una funcion
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);//this: hace referencia de la classe actual
    }
}

let persona1:Persona;
persona1=new Persona('Dario',22);

let persona2=new Persona('Pablo',23);

//persona1.nombre='Mario';
//persona1.edad=23;

console.log(persona1.getNombre())

//persona1.imprimir();
//persona2.imprimir();

/*Son parecidad pero la classe es una plantilla y menciona que funcion es, pero no genera el cuerpo de la funcion
las dos son plantillas pero las interfaces son conocidad como funcione tontas*/

class Dado{
    private valor:number
    public tirar(){
            this.generar();
        }
        private generar(){
            this.valor=Math.floor(Math.random()*6)+1;
        }

        public imprimir(){
            console.log(`Salio el valor ${this.valor}`);
        }
    }
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

//Esta fue la clase de las Clases con Funciones de impreción
