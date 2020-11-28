const express = require('express')
const validUrl = require('valid-url')
const router = express.Router()
const dotenv = require('dotenv')
const shortID = require('shortid')
const urlDB = require('../models/urls')

dotenv.config()

router.post('/', async (req, res) => {
    const baseURL = process.env.BASE_URL + ':' + process.env.PORT
    const {longUrl} = req.body
    if(!validUrl.isUri(baseURL)){
        return res.status(401).json('Invalid Base URL.')
    }

    if(!validUrl.isUri(longUrl)){
        return res.status(401).json('Invalid Long URL.')
    }

    const shortUrlCode = shortID.generate()

    try {
        let url = await urlDB.findOne({longUrl})
        if(!url){
            url = new urlDB({
                urlCode: shortUrlCode,
                longUrl: longUrl,
                shortUrl: baseURL+'/'+shortUrlCode
            })
            await url.save()
        }
        return res.json(url)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json('Server Error!')
    }
})


module.exports = router
