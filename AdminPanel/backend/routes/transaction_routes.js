import express from "express";
import { addTransaction, getTransactions, deleteTransaction } from "../controllers/transaction_controllers.js";

const router = express.Router();

router.post("/add", addTransaction);
router.get("/get", getTransactions);
router.delete("/delete", deleteTransaction);

export default router;