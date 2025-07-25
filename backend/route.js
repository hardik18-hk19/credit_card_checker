import express from "express";
import { checkCreditCard } from "./controller.js";

const router = express.Router();

router.post("/validate-card", checkCreditCard);

export default router;
