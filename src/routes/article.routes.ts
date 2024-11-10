import { Router } from "express";
import {
  CCreateArticle,
  CDeleteArticle,
  CGetAllArticles,
  CGetArticleById,
  CUpdateArticle,
} from "../controllers/ArticleController";

const router = Router();

router.get("/", CGetAllArticles);
router.get("/:id", CGetArticleById);
router.post("/", CCreateArticle);
router.patch("/:id", CUpdateArticle);
router.delete("/:id", CDeleteArticle);
router.post("/tags", CCreateArticle);
export default router;
