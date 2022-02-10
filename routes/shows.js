const express = require('express');
const router = express.Router();
const db = require('../model/db')
const app = express();

// get home page
router.get('/shows', function(req, res) {
    res.render('partials/show-list', {
        locals: {
            showsData: db,
            path: req.path
        }
      })
})



// router.post('/', function(req, res, next) {
//     res.send("POST request from home page");
// })

module.exports = router;