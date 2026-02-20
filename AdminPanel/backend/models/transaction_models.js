import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: String,
    note: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const transactionCollection = mongoose.model("transactions", transactionSchema);