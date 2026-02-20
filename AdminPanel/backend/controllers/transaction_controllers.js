import { transactionCollection } from "../models/transaction_models.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const addTransaction = async (req, res) => {
    try {
        const token = req.cookies.auth_token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const transaction = await transactionCollection.create({
            ...req.body,
            userId: decoded.id
        });

        res.json({ status: true, message: "Transaction added!", transaction });

    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const token = req.cookies.auth_token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const transactions = await transactionCollection.find({ userId: decoded.id });

        res.json({ status: true, transactions });

    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.query;
        await transactionCollection.findByIdAndDelete(id);

        res.json({ status: true, message: "Deleted successfully" });

    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};