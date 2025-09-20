import { NotificadorComida, ComidaService } from './services'
import { pizza, ensalada, hamburguesa } from './objects'

const service = new ComidaService();
const notificador = new NotificadorComida(service);

notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

service.modificarCalorias(pizza, 500);
notificador.notificar(pizza);