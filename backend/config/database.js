const mongoose=require("mongoose")
const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://bitbytecoders:bitbytecoder123@cluster0.shit8by.mongodb.net/ewaste",{useNewUrlParser: true,
   useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`Mongodb connected with server:${data.connection.host}`)
    })
}

module.exports=connectDatabase