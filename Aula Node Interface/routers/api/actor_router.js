import { createActor, listActors, updateActor, deleteActor } from '../Controller/actor_Controller.js'
import { Router } from 'express'

const router = Router();

router.post('/create', createActor)
router.get('/list', listActors)
router.post('/update', updateActor)
router.post('/delete', deleteActor)

export default router