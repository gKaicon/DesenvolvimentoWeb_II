import { createActor, listActors, updateActor, deleteActor, editActor } from '../../Controller/web/actor_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', listActors)
router.post('/create', createActor)
router.post('/edit', editActor)
router.post('/update', updateActor)
router.post('/delete', deleteActor)

export default router