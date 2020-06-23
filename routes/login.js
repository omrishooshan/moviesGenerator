
let express= require('express')
let router = express.Router()
let Users = require('../Model/usersModel')

router.get('/',function(req,res,next){
       res.render('login',{alert: false})
})

router.post('/',function(req,resp){
       
       Users.find({},(err,users)=>{
           if(err){console.log(err)}
           else{
              
                  let myUsers= users
                  let IsUserHere=myUsers.filter(x=> x.UserName == req.body.username && x.Password == req.body.password)[0]
                  let userId=IsUserHere.id
                  if(IsUserHere === undefined){
                           resp.render('login',{alert: true})
                  }
                  else{
                        
                        resp.redirect('/main')
                  }
           }
       })
})

router.get('/CreateAccount',function(req,resp,next){
       resp.render('createAccount')
})

module.exports= router