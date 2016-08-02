
var multer = require('multer');
var upload = multer({ dest: './uploads' });




module.exports = function(app){
    
    app.post('/', upload.single('upl'), function(req, res){
        
        res.json({
            size: req.file.size
        });
    });
    
}

