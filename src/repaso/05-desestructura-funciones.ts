//Desestructación de funciones

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Nokia',
    precio:1200
}

const tablet:Producto={
    desc:'Ipad Air',
    precio:20500
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio
    })
    return total * 0.16;
}

const articulos1=[telefono, tablet];
const totaliva=calcularIva(articulos1);
console.log('totalIva', totaliva);

export function calcularIVA(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16];
}

const articulos=[tablet,telefono];
const [total,iva]=calcularIVA(articulos);
console.log('Total: ', total);
console.log('Total con IVA: ',iva);

//Esta fue la clase de destructuración de funciones
