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

router.get('/business', (req, res)=> {
    res.render('business');
});

router.get('/blog', (req, res)=> {
    res.render('blog');
});

module.exports = router;