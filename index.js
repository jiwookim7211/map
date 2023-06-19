const router = require('express').Router();

router.get('/',(req,res,next)=>{
    res.render('index',{
        javascriptkey:process.env.javascriptkey
    });
});

module.exports = router;
(.env)

javascriptkey=6304186388c4dcaf04316228175dda24
