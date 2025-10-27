import express from "express";
import { handleUsers } from "../controllers/user.controller.js";
export const router = express.Router();

// Routes
router.get("/users", handleUsers);
