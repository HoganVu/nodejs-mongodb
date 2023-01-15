const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
    res.send("Getting a list of all products...")
})

module.exports = router;