interface Detalle {
    autor: string
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

const reproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: "Cancion Prueba",
    detalle: {
        autor: "El Joe",
        anio: 2025
    }
}

//const cancion = reproductorAudio.cancion;
//const autor = reproductorAudio.detalle.autor;
//console.log(cancion);
//console.log(autor);

//console.log(reproductorAudio);

const { cancion: nombreCancion } = reproductorAudio;
console.log(nombreCancion);

const { detalle } = reproductorAudio;
const { autor: nombreAutor1 } = detalle;
console.log(nombreAutor1);

const { detalle: {autor: nombreAutor2 } } = reproductorAudio;
console.log(nombreAutor2);

// arrays

const frutas = ["Peras", "Manzanas", "Fresas"];
console.log("Frutas: " + (frutas[3] || 'No se ha encontrado'));

const [p1, p2, p3] = frutas;
console.log(p1, p2, p3);

interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: "iPhone 17 Pro Max 256",
    precio: 8000000
}

const computador: Producto = {
    descripcion: "Mac",
    precio: 5000000
}

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.19;

interface ImpuestosOptions {
    impuesto: number;
    productos: Producto[];
}

function calcularImpuesto(options: ImpuestosOptions): number[] {
    let total: number = 0;
    options.productos.forEach(({ precio }) => {
        total += precio
    })

    return [total, total * options.impuesto];
}

const productos: ImpuestosOptions = {
    impuesto: 25,
    productos: carrito
}

const totalPagar1: number[] = calcularImpuesto( productos );
const totalPagar2: number[] = calcularImpuesto({
    impuesto: 45,
    productos: carrito
});

console.log({totalPagar1, totalPagar2})

export {};