const express = require('express')
const urlDB = require('../models/urls')
const router = express.Router()

router.get('/:code', async (req, res) => {
    try {
        const url = await urlDB.findOne({urlCode: req.params.code})
        if(url){
            res.redirect(url.longUrl)
        } else{
            res.status(404).json('No url found')
        }
    } catch (error) {
        res.status(500).json('Server Error')
    }
    
})

module.exports = router