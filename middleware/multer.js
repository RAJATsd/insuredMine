const multer = require('multer');

const storage = multer.memoryStorage({
    destination:function(req,file,callback){
        callback(null,'../uploads/')
    }
});

module.exports = multer({storage}).single('csv');