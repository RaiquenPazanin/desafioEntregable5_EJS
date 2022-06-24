const { Router } = require('express')
const router = Router()
const { rutePostController, ruteGetController } = require('../controllers/rutasController')



router.get('/productos', ruteGetController)

router.post('/productos', rutePostController)


module.exports = router