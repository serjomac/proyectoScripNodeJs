var express = require('express');
var router = express.Router();
var User=require('../models/User');

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('home', { test: 'Express' });


  User.getAllUser(function(err,rows){

        if(err)
        {
            //res.json(err);
            res.render('home',{test:err})
            
        }
        else
        {
            //res.json(rows);
            res.render('home',{test:rows});
        }
 
    });
        
        
        
  //res.render('home', {test:"as"});
        
        
});     

router.post('/addUser', function(req, res){
    
    console.log(req.body)
    
    User.addUser(req.body,function(err, rows){
        if(err){
            res.render('home', {test:err})
            
        }
        else{
            res.redirect('/');
        }
        
    })

})

router.get('/deleteUser/:id', function(req, res){
    User.deleteUser(req.params.id, function(err, resutl){
        if(err){
            res.render('home', {test:err})
        }
        else{
            res.redirect('/');
        }
    })
    
    
    
})

router.get('/edit/:id',function(req, res){
    
    User.editUser(req.params.id, function(err, rows){
        
        if(err)
        {
            //res.json(err);
            res.render('edit',{test:err})
            
        }
        else
        {
            //res.json(rows);
            res.render('edit',{test:rows});
        }
        
    })
    
})


router.post('/updateUser/:id', function(req, res){
    console.log(req.params.id)
    User.editarUser(req.params.id, req.body, function(err, result){
        console.log(req.body)
        if(err){
            res.render('edit', {test:err})
            
        }
        else{
            res.redirect('../../');
        }
    })
    
})


    



module.exports = router;
