import mongoose from "mongoose";
import bcrypt from "bcryptjs";////pasword in the database it encrypted what we use to encrypt is bcrypt

//creating user model and defining all the fields for user!
const userSchema = mongoose.Schema({//mongoose.Schema({fields}, {timestamp});
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

//creating method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);//userSchema.password
}

//Before saving password do encryption => it is presaved, uneccessary to import and export to use
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model("User", userSchema);
export default User;