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

export {};