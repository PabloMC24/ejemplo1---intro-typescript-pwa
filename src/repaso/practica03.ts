
//Operación de multiplicar a x b, usando suma, a = 3 y b=5, res:3+3+3+3+3=15

class suma{
    public numero1:number;
    public numero2:number;

    setNumero1(a:number,b:number){
        this.numero1=a;
        this.numero2=b;
        
    }

    getNumero1():number{ //
        return this.numero1, this.numero2;

    }

    calcular():void{
        for(let i=1; i<6; ++i){
            console.log(` ${this.numero1} + ${this.numero1} + ${this.numero1} + ${this.numero1} + ${this.numero1} = ${this.numero1*this.numero2}`)
        }
        
        
    }

}

let table1= new suma();
table1.setNumero1(3,5);
console.log(table1.calcular());
console.log('La suma de los numeros es: ' + table1.getNumero1());
