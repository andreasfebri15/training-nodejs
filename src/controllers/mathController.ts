import { Response, Request } from "express";
import { formatResponse, logHistory } from "../utils";
import SMathOperation, {
  getAvailableOperations,
} from "../services/math.service";
import fs from "fs";

const CMathOperations = (req: Request, res: Response) => {
  const { valueA, valueB, operation } = req.query;

  const numA = Number(valueA);
  const numB = Number(valueB);

  try {
    const result = SMathOperation(numA, numB, operation as string);
    if (result !== null) {
      logHistory(operation as string, numA, numB, result);
      res.json(formatResponse(200, "success", result));
    } else {
      res
        .status(400)
        .json(formatResponse(400, "division by zero not allowed", null));
    }
  } catch (error: any) {
    res.status(400).json(formatResponse(400, error.message, null));
  }
};

export const getOperationParams = (req: Request, res: Response) => {
  const { valueA, valueB, operation } = req.params;
  const numA = Number(valueA);
  const numB = Number(valueB);

  try {
    const result = SMathOperation(numA, numB, operation as string);
    if (result !== null) {
      logHistory(operation as string, numA, numB, result);
      res.json(formatResponse(200, "success", result));
    } else {
      res
        .status(400)
        .json(formatResponse(400, "division by zero not allowed", null));
    }
  } catch (error: any) {
    res.status(400).json(formatResponse(400, error.message, null));
  }
};

export const addcalculate = (req: Request, res: Response) => {
  const { valueA, valueB, operation } = req.body;
  const numA = Number(valueA);
  const numB = Number(valueB);

  try {
    const result = SMathOperation(numA, numB, operation as string);
    if (result !== null) {
      logHistory(operation as string, numA, numB, result);
      res.json(formatResponse(200, "success", result));
    } else {
      res
        .status(400)
        .json(formatResponse(400, "division by zero not allowed", null));
    }
  } catch (error: any) {
    res.status(400).json(formatResponse(400, error.message, null));
  }
};

export const getHistory = (req: Request, res: Response) => {
  const historyFile = "history.json";
  const data = JSON.parse(fs.readFileSync(historyFile, "utf-8"));
  res.json(formatResponse(200, "success", data));
};

export const getOperationsList = (req: Request, res: Response) => {
  const result = getAvailableOperations();
  res.json(formatResponse(200, "success", result));
};

export const getHistoryById = (req: Request, res: Response) => {
  const { id } = req.params;
  const historyFile = "history.json";

  const data = JSON.parse(fs.readFileSync(historyFile, "utf-8"));
  const index = parseInt(id, 10);

  if (index >= 0 && index < data.length) {
    const result = data[index];
    res.json(formatResponse(200, "success", result));
  } else {
    res.status(404).json(formatResponse(404, "Entry not found", null));
  }
};
export const deleteHistoryById = (req: Request, res: Response) => {
  const { id } = req.params;
  const historyFile = "history.json";
  const data = JSON.parse(fs.readFileSync(historyFile, "utf-8"));
  const index = parseInt(id, 10);

  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    fs.writeFileSync(historyFile, JSON.stringify(data));
    res.json(formatResponse(200, "success", null));
  } else {
    res.status(404).json(formatResponse(404, "Entry not found", null));
  }
};

export const getHistoryByIndex = (req: Request, res: Response) => {
  const { id } = req.params;
  const historyFile = "history.json";

  if (!fs.existsSync(historyFile)) {
    return res
      .status(404)
      .json(formatResponse(404, "No history available", null));
  }

  const data = JSON.parse(fs.readFileSync(historyFile, "utf-8"));

  // Parse id as an integer to use it as an index
  const index = parseInt(id, 10);

  // Check if the index is within bounds
  if (index >= 0 && index < data.length) {
    const result = data[index];
    res.json(formatResponse(200, "success", result));
  } else {
    res.status(404).json(formatResponse(404, "Entry not found", null));
  }
};

export default CMathOperations;
