module.exports = (app) => {
    app.use('/dict', require('./dict.routes'));
    app.use('/user', require('./user.routes'));
    app.use('/', require('./index.routes'));
    app.use('/auth', require('./auth.routes'));
}