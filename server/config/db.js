import mongoose from "mongoose";
// When we deal with DB
//Everything here it is going return a Promise that is why we need to async await!

//Creating data models in SQL you do in database level! Either with migration or etc
// With mongoDB you do it in application level!
// models for this app will be located in server/models


const connectDB = async ()=> {
    try {
        const buildConnection = await mongoose.connect(process.env.MONGO_URI, { // mongoose.connect(uriString, {});
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB Connected: ${buildConnection.connection.host}`.cyan.underline.bold);
    }
    catch(error){
        console.log(`Error in catch: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
export default connectDB;
