const express = require ('express')
var router = express.Router()
const jsonfile = require('jsonfile')

router.get('/',function(req,resp,next){
  
    
    resp.render('mainPage')
})



module.exports = router