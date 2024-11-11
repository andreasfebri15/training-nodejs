import { Request, Response } from "express";
import { formatResponse } from "../utils";
import SCar from "../services/car.service";

const CGetAllCars = async (req: Request, res: Response) => {
  try {
    const car = await SCar.findAll();
    res.json(formatResponse(200, "Berhasil melakukan fetch dataa", car));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const CGetCar = async (req: Request, res: Response) => {
  try {
    const car = await SCar.findCar();
    res.json(formatResponse(200, "Berhasil melakukan fetch data car", car));
  } catch (error: any) {
    res.json(formatResponse(500, error.message));
  }
};

const CCreateCar = async (req: Request, res: Response) => {
  try {
    const newArticle = await SCar.create(req.body);
    res.json(
      formatResponse(201, "Berhasil menambahkan data Article", newArticle)
    );
  } catch (error: any) {
    res.status(500).json({ error: "Failed to create article" });
  }
};

export { CGetAllCars, CGetCar, CCreateCar };
