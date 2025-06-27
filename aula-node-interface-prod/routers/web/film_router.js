import { createFilm, listFilms, editFilm, updateFilm, deleteFilm } from '../../Controller/web/film_Controller.js'
import { Router } from 'express'

const router = Router();
router.get('/', listFilms)
router.post('/create', createFilm)
router.post('/edit', editFilm)
router.post('/update', updateFilm)
router.post('/delete', deleteFilm)

export default router