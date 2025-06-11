import { createGender, listGenders, updateGender, deleteGender, showPage } from '../../Controller/web/gender_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', showPage)
router.post('/create', createGender)
router.get('/list', listGenders)
router.post('/update', updateGender)
router.post('/delete', deleteGender)

export default router