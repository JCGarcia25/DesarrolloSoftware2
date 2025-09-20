import {type Comida} from './interfaces'

export class ComidaService {

    public mostrarInfo(comida: Comida): void {
        const { nombre, calorias, esVegana } = comida;

        console.log(
            `Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`
        );
    }

    public modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        comida.calorias = nuevasCalorias;

        return comida;
    }
}

export class NotificadorComida {

    constructor(
        public comidaService: ComidaService,
    ) {}

    public notificar(comida: Comida) {
        console.log('Notificando comida...');
        this.comidaService.mostrarInfo(comida);
    }
}