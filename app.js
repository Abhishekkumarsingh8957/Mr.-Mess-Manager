const express=require('express')
const app=express();
const router = express.Router();
const loginstudent=require('./loginstudent')
const logincheifWarden=require('./logincheifWarden')
const loginaccountant=require('./loginaccountant')

app.use('/loginstudent',loginstudent)
app.use('/logincheifWarden',logincheifWarden)
app.use('/loginaccountant',loginaccountant)

app.use('/',(req,res,next)=>{
    res.status(404).json({
        message:'request'
    })
})

module.exports=app;
module.exports=router;