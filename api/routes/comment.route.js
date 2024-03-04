import express from "express";
import { createComment } from "../controller/comment.controller.js";
import { verifyToken } from "../util/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);

export default router;