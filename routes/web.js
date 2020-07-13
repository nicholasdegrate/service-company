const express = require('express');
const router = express.Router();


//route
router.get('/', (req, res)=> {
    res.render('home');
});

router.get('/faq', (req, res)=> {
    res.render('faq');
});

router.get('/student', (req, res)=> {
    res.render('student');
});

module.exports = router;