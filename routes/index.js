const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensajeQuery = req.query.mensaje || '';
    const mensajeLocals = res.locals.mensaje || '';
    const mensaje = mensajeQuery || mensajeLocals;

    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Principal</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <p>La hora actual es: ${req.hora}:00</p>
            ${mensaje ? `<p>${mensaje}</p>` : ''}
            <a href="/endroute"><button>Entrar</button></a>
        </body>
        </html>
        `);
});

module.exports = router;