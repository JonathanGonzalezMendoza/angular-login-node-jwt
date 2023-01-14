const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express()
const router = express.Router()

// Secret Key para generar el token

const JWT_Secret = 'secret';

// Usuarios de prueba || Endpoint para consultar usuarios desde la base de datos

const users = {
    email: 'usuario1@gmail.com',
    password: '1234'
};

//  Configuracion para peticiones de API y envio de formulario

app.use(cors());
app.use(bodyParser.json());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Puerto en el que se va a ejecutar el servidor

const port = process.env.PORT || 3000;

// Metodos GET POST PUT DELETE

router.post('/authenticate', (req, res) => {
    if(req.body) {
        const user = req.body;
        if (users.email===req.body.email && users.password === req.body.password) {
            const token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
              signed_user: user,
              token: token
            });
          } else {
            res.status(403).send({
              errorMessage: 'Authorization required!'
            });
          }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }
});

// Utilizamos enrutadores para asociar los recursos (http://localhost:3000/api/dato)

app.use('/api', router);

// Si la ruta no existe

app.use((req,res) => {
    res.send('No se encontro la ruta solicitada')
});

// Inciamos el servidor

app.listen(port, () => {
    console.log("Iniciando Puerto: " + port)
});