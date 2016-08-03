
var multer = require('multer');

var fs = require('fs');
var path = require("path");


module.exports = function(app){
    
    app.post('/', multer().single('upl'), function(req, res){
        
        res.json({
            size: req.file.size
        });
        
        
        
    });
    
}

