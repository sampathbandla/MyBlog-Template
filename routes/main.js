const express = require("express")
const router = express.Router()
const loginAction = require("../controllers/login")
router.get("/login",(req,res) => {
    res.render("login");
});

router.post("/login",(req,res) => {
    loginAction(req.body.username,req.body.password,(response,details) => {
        if(response == false)
        {
            res.send(details);
        }
        else
        {
            res.send(details)
        }
    });
});
module.exports = router;