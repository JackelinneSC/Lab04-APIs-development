var express = require('express');
var router = express.Router();
var moment = require('moment');
let jwt = require('jwt-simple');

router.get('/', function(req, res, next){
    res.render('token', {title: "Generar token", password:'', jsonContent:'', tokenValue:''});
});

router.get('token/:content', function(req, res, next){
   let values = req.params.content.split('&');
   let payload = {
        sub : values[1],
        iat : moment().unix(),
        exp : moment().add(14, 'days').unix()        
    };
    if(payload){
        let token = jwt.encode(payload,secretWord_);
    }
    else{
        res.render('token', { title: 'Generación de token', secretW :'' ,contentJ:'', tokenValue:''});
    }
    res.render('token', { title: 'Generación de token', secretW :values[1] ,contentJ:values[0], tokenValue:token});

});
module.exports = router;





