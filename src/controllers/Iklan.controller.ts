import { Request, Response } from "express";
import { formatResponse } from "../utils";
import SIklan from "../services/iklan.service";

const CGetAllIklan = async (req: Request, res: Response) => {
  try {
    const car = await SIklan.findAll();
    res.json(formatResponse(200, "Berhasil melakukan fetch dataa", car));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

export { CGetAllIklan };
