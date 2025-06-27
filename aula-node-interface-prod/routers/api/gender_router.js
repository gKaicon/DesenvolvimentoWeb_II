import { createGender, listGenders, updateGender, deleteGender } from '../../Controller/api/gender_Controller.js'
import { Router } from 'express'

const router = Router();

router.post('/create', createGender)
router.get('/list', listGenders)
router.post('/update', updateGender)
router.post('/delete', deleteGender)

export default router