import { createFilm, listFilms, updateFilm, deleteFilm, showPage } from '../../Controller/web/film_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', showPage)
router.post('/create', createFilm)
router.get('/list', listFilms)
router.post('/update', updateFilm)
router.post('/delete', deleteFilm)

export default router