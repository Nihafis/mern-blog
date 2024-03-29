import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getComments,
  getPostComments,
  likeComment,
} from "../controller/comment.controller.js";
import { verifyToken } from "../util/verifyUser.js";

const router = express.Router();

router.get("/getPostComments/:postId", getPostComments);
router.post("/create", verifyToken, createComment);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);
router.get('/getcomments', verifyToken, getComments);

export default router;
