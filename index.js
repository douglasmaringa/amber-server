const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
let port = process.env.PORT || 8080;
//db connection 
mongoose.connect('mongodb+srv://admin:admin@cluster0.qwahu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true })
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Db is connected successfully")
});

//middleware 
const app = express();
app.use(express.json());
app.use(cors());

//import routes
const userRoute = require("./routes/user");

//Route Middlewares
app.use("/api/user", userRoute);

//server now on and listening to server 
app.listen(port,()=> console.log("server started on port 8080"))