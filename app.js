const express=require("express");
const cors = require('cors');
const app=express();
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use("/api/sheets",require("./routes/storeuser"));
app.use("/api/payments",require("./routes/createOrder"));
app.use("/api/payments",require("./routes/PaymentVerificarion"));
app.use("/api/payments",require("./routes/RequestKey"));

var port=process.env.PORT || 4000;

// app.get('/api',(req,res)=>{
//     res.send("server is on");
// })
app.listen(port,async ()=>{
    console.log("Server is on and running on port 4000");
})






