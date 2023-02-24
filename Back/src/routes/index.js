const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById.js");
const getCharDetail = require("../controllers/getCharDetail.js")
const {getFav, postFav, deleteFav} = require("../controllers/fav.js")


router.get('/rickandmorty/character/:id', getCharById )
router.get('/rickandmorty/detail/:detailId', getCharDetail )
router.get('/rickandmorty/fav', getFav)
router.post('/rickandmorty/fav', postFav )
router.delete('/rickandmorty/fav/:id', deleteFav )

module.exports = router

