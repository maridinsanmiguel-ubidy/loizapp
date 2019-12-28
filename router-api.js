const apiRouter = require('express').Router()
const userController = require('./contollers/userController')
const postController = require('./contollers/postController')
const followController = require('./contollers/followController')
const cors = require('cors')

apiRouter.use(cors())

apiRouter.post('/login', userController.apiLogin)
apiRouter.post('/create-post', userController.apiMustBeLoggedIn, postController.apiCreate)
apiRouter.delete('/posts/:id', userController.apiMustBeLoggedIn, postController.apiDelete)
apiRouter.get('/postsByAuthor/:username', userController.apiGetPostsByUsername)


// API is not 100% finish

module.exports = apiRouter