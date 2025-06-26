// routes/Customer.route.js
import { Router } from "express";
import { getAllCustomers } from "../controllers/Customer.js";

const router = Router();

router.get("/", getAllCustomers);

export default router;
