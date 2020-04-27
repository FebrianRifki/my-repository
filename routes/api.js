const express = require('express');
const router = express.Router();



router.get('/courses', (req, res)=>{
    res.send([1,2,3]);
});

router.get('/courses/:year/:mounth', (req, res)=>{
    res.send(req.params);
});

router.get('/user', (req,res)=>{
  res.send('this is user router')
});

module.exports = router;