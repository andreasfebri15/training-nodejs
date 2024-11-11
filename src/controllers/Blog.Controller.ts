import { Request, Response } from "express";
import { formatResponse } from "../utils";
import SBlog from "../services/blog.service";

const CGetAllBlog = async (req: Request, res: Response) => {
  try {
    const car = await SBlog.findAll();
    res.json(formatResponse(200, "Berhasil melakukan fetch dataa", car));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

export { CGetAllBlog };
