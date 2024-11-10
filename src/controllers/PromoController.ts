import { Request, Response } from "express";
import SPromo from "../services/promo.service";
import { formatResponse } from "../utils";

const CGetAllPromos = async (req: Request, res: Response) => {
  try {
    const promo = await SPromo.findAll();
    res.json(formatResponse(200, "Berhasil melakukan fetch dataa", promo));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const CGetPromoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const promo = await SPromo.findById(id);
    if (!promo) {
      res.status(404).json(formatResponse(404, "Promo not found", null));
      return;
    }
    res.json(formatResponse(200, "Berhasil fetch data berdasarkan id", promo));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const createPromo = async (req: Request, res: Response) => {
  try {
    const newPromo = await SPromo.create(req.body);
    res.json(formatResponse(201, "Berhasil menambahkan data", newPromo));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const CupdatePromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatePromo = await SPromo.update(id, req.body);
    if (!updatePromo) {
      res.status(404).json(formatResponse(404, "Promo not found", null));
      return;
    }
    res.json(formatResponse(200, "Berhasil mengedit data", updatePromo));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const CdeletePromo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletePromo = await SPromo.remove(id);
    if (!deletePromo) {
      res.status(404).json(formatResponse(404, "Promo not found", null));
      return;
    }
    res.json(formatResponse(200, "Berhasil menghapus data", deletePromo));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

export {
  CGetAllPromos,
  CGetPromoById,
  createPromo,
  CupdatePromo,
  CdeletePromo,
};
