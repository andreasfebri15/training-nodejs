import { Request, Response } from "express";
import { formatResponse } from "../utils";
import SArticle from "../services/article.service";
const CGetAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await SArticle.findAll();
    res.json(formatResponse(200, "Berhasil melakukan fetch dataa", articles));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to retrieve articles" });
  }
};

const CGetArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const articles = await SArticle.findById(id);
    if (!articles) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.json(
      formatResponse(
        200,
        "Berhasil fetch data Article berdasarkan id",
        articles
      )
    );
  } catch (error: any) {
    res.status(500).json({ error: "Failed to retrieve articles" });
  }
};

const CCreateArticle = async (req: Request, res: Response) => {
  try {
    const newArticle = await SArticle.create(req.body);
    res.json(
      formatResponse(201, "Berhasil menambahkan data Article", newArticle)
    );
  } catch (error: any) {
    res.status(500).json({ error: "Failed to create article" });
  }
};

const CUpdateArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedArticle = await SArticle.update(id, req.body);
    if (!updatedArticle) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.json(
      formatResponse(200, "Berhasil Mengupdate data Article", updatedArticle)
    );
  } catch (error: any) {
    res.status(500).json({ error: "Failed to update article" });
  }
};

const CDeleteArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedArticle = await SArticle.remove(id);
    if (!deletedArticle) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.json(
      formatResponse(200, "Berhasil menghapus data Article", deletedArticle)
    );
  } catch (error: any) {
    res.status(500).json({ error: "Failed to delete article" });
  }
};

const CCreateArticleWithTags = async (req: Request, res: Response) => {
  const articleData = req.body.data;
  try {
    const newArticle = await SArticle.createWithTags(articleData);
    res.json(formatResponse(201, "Success", newArticle));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to create article" });
  }
};

export {
  CGetAllArticles,
  CGetArticleById,
  CCreateArticle,
  CUpdateArticle,
  CDeleteArticle,
};
