const express = require('express')
const router = express.Router();


router.get('/', (req,res,next) => {
    next(new Error("cannot get a list of all products"))
})

router.post('/', (req, res) => {
    res.send("Product created")
})

router.get('/:id', (req, res) => {
    res.send("Getting a single product")
})

router.patch('/:id', (req, res) => {
    res.send("Updating a single product")
})

router.delete('/:id', (req, res) => {
    res.send("Deleting a single product")
})

module.exports = router;