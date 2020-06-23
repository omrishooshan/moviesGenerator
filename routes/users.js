var express = require('express');
var router = express.Router();
var jsonfile= require('jsonfile');
const { render } = require('ejs');



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
  
router.post('/addUsers',function(req,resp){

})


////////////////////////////////
router.post('/addUsers', function(req,resp){

  //first update permissions
jsonfile.readFile('./jsonData/permissions.json', function(err,data){
  if(err){
    console.log(err)
  }
  else{
   
    let permissionsArr = [] // array to fill in all new permissions for the update
    //**********create an array with the new permissions
    if(req.body.Create_Movies){
      permissionsArr.push(req.body.Create_Movies)
    }
    if(req.body.Update_Movie){
      permissionsArr.push(req.body.Update_Movie)
    }
    if(req.body.Delete_Movies){
      permissionsArr.push(req.body.Delete_Movies)
    }
    if(req.body.View_Movies){
      permissionsArr.push(req.body.View_Movies)
    }
    if(req.body.Update_Subscription){
      permissionsArr.push(req.body.Update_Subscription)
    }
    if(req.body.Delete_Subscriptions){
      permissionsArr.push(req.body.Delete_Subscriptions)
    }
    if(req.body.Create_Subscriptions){
      permissionsArr.push(req.body.Create_Subscriptions)
    }

    if(req.body.View_Subscription){
      permissionsArr.push(req.body.View_Subscription)
    }
    //*********************************END

    let newPerms =  data // copy the old permission json and update the one by its id
     
    newPerms.permissions.forEach(x=>{
  if(x.id.toString() === req.body.id){
    x.Permissions = permissionsArr
  }
  })
     
  //write down new permissions in permissions.json
  jsonfile.writeFile('./jsonData/permissions.json',newPerms,function(err){
    if(err){console.log(err)}
  })
  }
      
})

///second-update user
jsonfile.readFile('./jsonData/users.json',function(err,data){
  if(err){console.log(err)}
  else{
    let myUsers = data

    myUsers.users.forEach(x=>{
      if(x.id.toString()=== req.body.id){
        x.FirstName= req.body.fname,
        x.LastName= req.body.lstname,
        x.CreatedDate= req.body.created_date,
        x.SessionTimeOut= req.body.session_timeout
      }
    })
    jsonfile.writeFile('./jsonData/users.json',myUsers,function(err){
      if(err){console.log(err)}
    })
  }
})
resp.redirect('/users/allUsers')
})
////////////////////////////////












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
   us.id= us.id.toString()
   resp.render('editUserPage',{data:us})

    
  
   }
 
 })

})


router.post('/editUser/updateUser', function(req,resp){

  //first update permissions
jsonfile.readFile('./jsonData/permissions.json', function(err,data){
  if(err){
    console.log(err)
  }
  else{
   
    let permissionsArr = [] // array to fill in all new permissions for the update
    //**********create an array with the new permissions
    if(req.body.Create_Movies){
      permissionsArr.push(req.body.Create_Movies)
    }
    if(req.body.Update_Movie){
      permissionsArr.push(req.body.Update_Movie)
    }
    if(req.body.Delete_Movies){
      permissionsArr.push(req.body.Delete_Movies)
    }
    if(req.body.View_Movies){
      permissionsArr.push(req.body.View_Movies)
    }
    if(req.body.Update_Subscription){
      permissionsArr.push(req.body.Update_Subscription)
    }
    if(req.body.Delete_Subscriptions){
      permissionsArr.push(req.body.Delete_Subscriptions)
    }
    if(req.body.Create_Subscriptions){
      permissionsArr.push(req.body.Create_Subscriptions)
    }

    if(req.body.View_Subscription){
      permissionsArr.push(req.body.View_Subscription)
    }
    //*********************************END

    let newPerms =  data // copy the old permission json and update the one by its id
     
    newPerms.permissions.forEach(x=>{
  if(x.id.toString() === req.body.id){
    x.Permissions = permissionsArr
  }
  })
     
  //write down new permissions in permissions.json
  jsonfile.writeFile('./jsonData/permissions.json',newPerms,function(err){
    if(err){console.log(err)}
  })
  }
      
})

///second-update user
jsonfile.readFile('./jsonData/users.json',function(err,data){
  if(err){console.log(err)}
  else{
    let myUsers = data

    myUsers.users.forEach(x=>{
      if(x.id.toString()=== req.body.id){
        x.FirstName= req.body.fname,
        x.LastName= req.body.lstname,
        x.CreatedDate= req.body.created_date,
        x.SessionTimeOut= req.body.session_timeout
      }
    })
    jsonfile.writeFile('./jsonData/users.json',myUsers,function(err){
      if(err){console.log(err)}
    })
  }
})
resp.redirect('/users/allUsers')
})



module.exports = router;
