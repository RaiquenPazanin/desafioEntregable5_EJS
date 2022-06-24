const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require('./routes/index');
const path = require('path')

app.use(express.json());
app.use(express.urlencoded());

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')



app.use('/', rutas)


app.listen(puerto, err => {
    if(err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})