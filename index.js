import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const port = 5010;
const app = express()
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "India@2023",
    database: "zi"
    
})
db.connect((err,result)=>{
    if(err)
    console.log("err occured ",err);
    else
    console.log("DB connected ");
})
let geti=0;
app.post("/insert",(req,res)=>{
    const {name, number, report, pincode} = req.body;
    let insertion = "insert into User(name, phone, report, pincode) value (?,?,?,?);";
    
    db.query(insertion,[name,number, report, pincode],(err,result)=>{
        if(err)
        console.log("Hi error there",err);
        else
        res.send({status: "inserted"});
        console.log(geti)
    })
})
app.get("/view",(req,res)=>{
    let select = "select * from User";
    db.query(select,(err,result)=>{
        if(err)
        console.log("Error there",err)
    else
    console.log(result)
    res.send(result)
    })
})
app.listen(port,()=>{
    console.log("Connected to the port",port);
});