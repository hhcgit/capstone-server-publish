const express = require('express')
const {requireAuth} = require('../middleware/jwt-auth')
const fetch = require('node-fetch')
const config = require('../config')

const plantRouter = express.Router()

plantRouter
    .route('/:name')
    .all(requireAuth)
    .get(async(req, res, next) => {
        const {name} = req.params
        
        const data = await fetch(`http://trefle.io/api/plants?q=${name}`,{
            method:'GET',
            headers: {
            'content-type': 'application/json',
            'authorization':`Bearer ${config.PLANT_API}`
            }
        })
            .then(re => re.json())
            .then(re=> re)
        res.send(data)
    })

plantRouter
    .route('/id/:id')
    .all(requireAuth)
    .get(async (req, res, next) => {
        const {id} = req.params
        const data = await fetch(`http://trefle.io/api/plants/${id}`, {
            method:'GET',
            headers: {
                'content-type': 'application/json',
                'authorization':`Bearer ${config.PLANT_API}`
            }
        })
        .then(re => re.json())
        .then(re => re)
        
        res.send(data)
    })

module.exports = plantRouter