import { createGender, listGenders, updateGender, deleteGender, editGender } from '../../Controller/web/gender_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', listGenders)
router.post('/create', createGender)
router.post('/edit', editGender)
router.post('/update', updateGender)
router.post('/delete', deleteGender)

export default router