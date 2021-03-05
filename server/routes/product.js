const express = require('express');
const router = express.Router();
const multer = require('multer');

//=================================
//            Product
//=================================


var storage = multer.diskStorage({
    destination: function(req,file,cb){//파일이어디에저장이되는지. 
        cb(null , '/uploads')
    },
    filename: function(req ,file ,cb){
        cb(null,'${Date.now()}file.fieldname+}_${file.originalname}')
    } 
})


var upload = multer({storage:storage}).single("file")



router.post('/image',(req,res)=>{
    //가져온 이미지를 저장을 해주면 된다.
    //multer 사용


    upload(req,res,err=>{
        if(err) {
            return req.json({success:false,err})

        }
        return res.json({success:true, filePath: res.req.file.path, fileName: res.req.file.filename})//전달
    })
})//이미 index 에서 api product를 거치고 product.js로 온것.
//fileupload 에서 보내는 request를   product.js에서 받아줌.


module.exports = router;
