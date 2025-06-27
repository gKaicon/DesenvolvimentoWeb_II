import { createFilm, listFilms, updateFilm, deleteFilm } from '../../Controller/api/film_Controller.js'
import { Router } from 'express'

const router = Router();

router.post('/create', createFilm)
router.get('/list', listFilms)
router.post('/update', updateFilm)
router.post('/delete', deleteFilm)

export default router