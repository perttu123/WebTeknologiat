import mongoose from "mongoose";

const model = new mongoose.Schema({
    id: String,
    createdAt: Number,
    first: String,
    last: String,
    twitter: String,
    avatar: String,
    notes: String,
    favorite: Boolean,
})

const User = mongoose.model("tasks", model);
export default User;