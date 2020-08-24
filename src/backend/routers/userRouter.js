var User = require('../controllers/userController')

module.exports = (router) => {
    router.get('/api/getUser', User.getUser);
    router.post('/api/addUser', User.addUser);
    router.put('/api/updateUser/:_id', User.updateUser);
    router.delete('/api/deleteUser/:_id', User.deleteUser);
}