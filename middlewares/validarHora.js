const validarHora = (req, res, next) => {
    if (req.hora < 12) {
        const mensaje = 'Aún no es la hora, espera hasta las 12:00 para entrar'
        res.locals.mensaje = mensaje
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
};

module.exports = validarHora;