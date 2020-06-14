var express = require('express');
var router = express.Router();
var jsonfile= require('jsonfile')



/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('usersPage');
});

router.get('/allUsers', function(req, res, next) {
  jsonfile.readFile('jsonData/users.json',function(err,data){
    if(err){
      console.log(err)
    }
    else{
     
      res.render('allUsersPage',{userData:data});
    }
  })

  });

router.get('/addUsers',function(req,resp,next){
  resp.render('addUsersPage')
})
  


//edit user
router.get('/editUser',  function(req,resp,next){
  let id = req.query.id
  jsonfile.readFile('./jsonData/users.json',  function(err,data){
   if(err){
     console.log(err)
   }
   else{

    let myUsers=data.users
    let us= myUsers.filter(x=> x.id == id)[0]
   
   resp.render('editUserPage',{data:us})

    
  
   }
 
 })

})

module.exports = router;
