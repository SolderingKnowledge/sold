import mongoose from "mongoose";

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

const User = mongoose.model("User", userSchema);
export default User;