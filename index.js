import { obtenerHoraActual, obtenerFechaCompleta } from './time.js' 

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    res.send(obtenerHoraActual());
});

app.get('/fecha-completa', (req, res) => {
    res.send(obtenerFechaCompleta());
});

export default app;

//hfbofips