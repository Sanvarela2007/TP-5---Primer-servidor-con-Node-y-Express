import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) =>  {
    res.send('Bienvenido a mi servidor');
})
app.get('/hora', (req, res) =>  {
    res.send();
})
app.get('/fecha-completa', (req, res) =>  {
    res.send();
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


