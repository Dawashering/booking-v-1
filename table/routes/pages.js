const { Router } = require("express");
const express = require("express")
const mysql = require("mysql")
const router = express.Router()
const auth = require('../controllers/auth')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingmachinetable'
});

router.get('/', function(req, res){
    res.render('./index')    
});

router.get('/:date', function(req, res){
   const date = req.params.date;
    conn.query(`select * from bookingvalue where date = ?`,[date], (err, result)=>{
        res.json(result);
    });
});

module.exports = router
























































































// const { Router } = require("express");
// const express = require("express")
// const mysql = require("mysql")
// const router = express.Router()
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bookingmachinetable'
// });


// router.get('/', function(req, res){
//     var a = "2021-12-02"
//     conn.query("SELECT * FROM bookingvalue where date = ?",[a], (err, result)=>{
//         res.render('./index', {result});
//     })
   
// });
// router.get('/view/index',(req,res)=>{
//     res.render('./index');
// });

// module.exports = router