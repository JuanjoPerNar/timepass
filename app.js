const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');
const PORT = 3000;

app.use(horaMiddleware);
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);

app.listen(PORT, () => {
    console.log(`El servidor está ejecutándose en http://localhost:${PORT}`);    
});