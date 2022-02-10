const express = require('express');
const router = express.Router();
const db = require('../model/db');
const app = express();


router.get("/shows/:Title", (req,res) => {
    const {Title} = req.params;
    const show = db.find(f => f.Title === Title);
    if (show){
        res.render('partials/show-details', 
        {
            locals: {
                showsData: show
            }
          })
    } else {
        res.status(404).send(`no show with the handle ${Title}`);
    }
});

// router.post('/', function(req, res, next) {
//     res.send("POST request from home page");
// })

module.exports = router;