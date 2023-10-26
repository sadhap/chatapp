const mongoose = require("mongoose");//import mongo db module
const connectDatabase =async ()=>{
   await mongoose.connect(process.env.MONGO_URL,{//connection string
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`moongodb is connectedto be the host:${con.connection.host}`)
    }).catch((err) => {
        console.log(err.message);
      });
    
}
module.exports = connectDatabase;