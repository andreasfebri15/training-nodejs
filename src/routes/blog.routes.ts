import { Router } from "express";
import { CGetAllBlog } from "../controllers/Blog.Controller";
const router = Router();

router.get("/", CGetAllBlog);
export default router;
