/*1 – Login Page
The home page of the system. A page with username & password text box and a “Login” button. A
successful log in redirect to “Main” Page. A failed attempt will present a proper message in the same
page (Login page).
Once a user logged in – his name will be presented in all the site pages
First time users (which don’t have password yet) will click on “create account” link which will redirect
them to a “CretaeAccount” page*/
let express= require('express')
let router = express.Router()

router.get('/',function(req,res,next){
       res.render('login')
})

router.get('/CreateAccount',function(req,resp,next){
       resp.render('createAccount')
})

module.exports= router