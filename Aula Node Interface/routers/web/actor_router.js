import { createActor, listActors, updateActor, deleteActor, showPage } from '../../Controller/web/actor_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', showPage)
router.post('/create', createActor)
router.get('/list', listActors)
router.post('/update', updateActor)
router.post('/delete', deleteActor)

export default router