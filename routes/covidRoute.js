//Require Express
const express = require('express');
//Activate method router rom express
const router = express.Router();
const CovidReg = require('../models/CovidReg');

//Redering the form when route is hit
router.get('/', (req, res) => {
    res.render('trials');
});

router.post('/', async(req,res) => {
    try{
        const person = new CovidReg (req.body)
        await person.save()
        res.redirect('/covid/')
    }
    catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
});
                                 
module.exports = router;