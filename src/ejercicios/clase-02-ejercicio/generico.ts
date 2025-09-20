// Función genérica
function crearCaja<T>(valor: T): { contenido: T } {
  return { contenido: valor };
}

// Pruebas con distintos tipos
const cajaNumero = crearCaja(5);
const cajaString = crearCaja("pizza");
const cajaObjeto = crearCaja({ nombre: "Hamburguesa", calorias: 800 });

// Mostrar resultados en consola
console.log(cajaNumero);
console.log(cajaString);
console.log(cajaObjeto);
