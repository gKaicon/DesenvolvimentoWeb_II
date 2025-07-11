import { createFilm, listFilms, updateFilm, deleteFilm } from '../Controller/film_Controller.js'
import { Router } from 'express'

const router = Router();

router.post('/create', createFilm)
router.get('/list', listFilms)
router.put('/update', updateFilm)
router.delete('/delete', deleteFilm)

export default router