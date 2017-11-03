var express = require('express');
var router = express.Router();
var moment = require('moment');
let jwt = require('jwt-simple');

router.get('/', function(req, res, next){
    res.render('token', {title: "Generar token", password:'', jsonContent:'', tokenValue:''});
});
function Validate(key, content){
    if(key || content)
        return true;
    else
        return false;
}
router.post('/', function(req, res, next){
   
   secretWord_ = req.body.password;
   let token = '';
   let payload = {
        sub : req.body.jsonContent,
               
    };
    if(Validate(secretWord_, req.body.jsonContent)){
        token = jwt.encode(payload,secretWord_);
    }
    else{
        res.render('token', { title: 'Generación de token', secretW :'' ,contentJ:'', tokenValue:''});
        return;
    }
    res.render('token', { title: 'Generación de token', secretW :secretWord_ ,contentJ: req.body.jsonContent, tokenValue:token});

});
module.exports = router;





