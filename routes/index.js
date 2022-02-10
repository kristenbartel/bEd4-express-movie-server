const express = require('express');
const router = express.Router();

// get home page
router.get('/', function(req, res) {
    res.render('index', {
        locals: {
            title: "Movies Express",
            subtext: "see movies"
        }
      })
})

router.post('/', function(req, res, next) {
    res.send("POST request from home page");
})


module.exports = router;

// set up a new router this will preform the get request
// then send to app
// 