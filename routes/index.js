module.exports = (app) => {
    app.use('/dict', require('./dict.routes'));
    app.use('/user', require('./user.routes'));
    app.use('/post', require('./post.routes'));
    app.use('/admin', require('./admin.routes'));
    app.use('/', require('./index.routes'));
}