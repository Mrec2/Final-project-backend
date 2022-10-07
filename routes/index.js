const validateToken = require('../middleware/validateToken.middleware');

module.exports = (app) => {
    app.use('/dict', require('./dict.routes'));
    app.use('/user', validateToken, require('./user.routes'));
    app.use('/auth', require('./auth.routes'));
    app.use('/comment', require('./comment.routes'));
    app.use('/post', require('./post.routes'));
}