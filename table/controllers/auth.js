const { json, response } = require("express");
const mysql = require("mysql");
const router = require("../routes/pages");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingmachinetable'
});

//passing data to mysql table

exports.data = async (req, res) =>{
  const obj = JSON.parse(JSON.stringify(req.body));
    const obj2 = (JSON.parse(obj.date));

    const equipment_num = obj2.equipmentnum;
    const time = obj2.time;
    const date = obj2.date;
  try{
    
    conn.query('INSERT INTO bookingvalue SET ?', {equipment:equipment_num, times:time, date:date}, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        console.log("Data Inserted");
      }
    })
  
  }
  catch(error){
    console.error("error");
  }
} 
  
  exports.delete = async (req, res) =>{

    try{
      const obj = JSON.parse(JSON.stringify(req.body));
      const obj2 = (JSON.parse(obj.date));

      const equipment_num = obj2.equipmentnum;
      const time = obj2.time;
      const date = obj2.date;
      var sql = "DELETE FROM bookingvalue WHERE equipment = ? and times = ? and date = ? ";

      await conn.query(sql,[equipment_num,time,date],(err,result)=>{
        if(err){
          console.error(err)
        }else{
          console.log("DELETED")
        }
      });

    }
    catch(error){
      console.error(error);
    }
  }



























































// const { json, response } = require("express");
// const mysql = require("mysql");
// const router = require("../routes/pages");

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bookingmachinetable'
// });
 
// exports.maxDate = async (req, res) =>{
//   const obj = JSON.parse(JSON.stringify(req.body));
//   var date = obj.date;
//   //getting data from mysql
//   conn.query(`select * from bookingvalue where date = ?`,[date],(err, results,)=>{
//     if(err){
//       return console.log(err);
//     }
     
//     return console.log(results);
//   });  
// } 




// //passing data to mysql table

// exports.data = async (req, res) =>{
//   const obj = JSON.parse(JSON.stringify(req.body));
//     const obj2 = (JSON.parse(obj.date));

//     const equipment_num = obj2.equipmentnum;
//     const time = obj2.time;
//     const date = obj2.date;
//   try{
    
//     conn.query('INSERT INTO bookingvalue SET ?', {equipment:equipment_num, times:time, date:date}, (error, results) => {
//       if(error) {
//         console.log(error);
//       } else {
//         console.log("Data Inserted");
//       }
//     })
  
//   }
//   catch(error){
//     console.error("error");
//   }
// } 
  
//   exports.delete = async (req, res) =>{

//     try{
//       const obj = JSON.parse(JSON.stringify(req.body));
//       const obj2 = (JSON.parse(obj.date));

//       const equipment_num = obj2.equipmentnum;
//       const time = obj2.time;
//       const date = obj2.date;
//       var sql = "DELETE FROM bookingvalue WHERE equipment = ? and times = ? and date = ? ";

//       await conn.query(sql,[equipment_num,time,date],(err,result)=>{
//         if(err){
//           console.error(err)
//         }else{
//           console.log("DELETED")
//         }
//       });

//     }
//     catch(error){
//       console.error(error);
//     }
//   }
