//Creación de la formula general

class formulaG{
    public a:number=1;
    public b:number=2;
    public c:number=-6;
    public x1:number;
    public x2:number;

    public operacion(){
        this.obtener();
    }

    public  obtener(){
        this.x1=((-1*-this.b)+(Math.sqrt((Math.pow(this.b,2) - (4*this.a*this.c) ))))/(2*this.a);
        this.x2=((-1*-this.b)+(Math.sqrt((Math.pow(this.b,2) - (4*this.a*this.c) ))))/(2*this.a);

    }

    public Resultado(){
        console.log(`El resultado es: ${this.x1}`);
    }
}

let formula=new formulaG();
formula.operacion();
formula.Resultado(); 