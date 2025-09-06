const mongoose=require('mongoose')
const dotenv=require('dotenv').config()



const connectDB=async()=>{
    try{
      await mongoose.connect(process.env.mongodb+srv://user_management:mynewpassword@usermanagementcluster.omi5sgl.mongodb.net/?retryWrites=true&w=majority&appName=UserManagementCluster
)
      console.log("Mongodb connected");
    }catch(err){
        console.log(`Error during mongodb connection ${err}`);
    }
}


module.exports=connectDB;
