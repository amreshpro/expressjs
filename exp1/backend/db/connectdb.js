import mongoose from "mongoose";

const connectDB = async(DB_URL)=>{

try{
const DB_OPTIONS = {
    dbName:'school',
}

await mongoose.connect(DB_URL,DB_OPTIONS);
console.log("Database connected successfully...")

}
catch(err){
    console.log('Database connection error: ',err)
}


}


export default connectDB;