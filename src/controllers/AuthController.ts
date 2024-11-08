import { Request, Response } from "express";
import { formatResponse } from "../utils";
import SAuth from "../services/auth.service";

const CLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json(formatResponse(200, "username and password required"));
    return;
  }

  try {
    const { accessToken, refreshToken } = await SAuth.login(username, password);
    res.json(formatResponse(200, "success", { accessToken, refreshToken }));
  } catch (error: any) {
    res.json(formatResponse(400, error.message));
  }
};

const CRegister = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json(formatResponse(200, "username and password required"));
    return;
  }
  try {
    const newUser = await SAuth.register(username, password);
    res.json(formatResponse(200, "success", newUser));
  } catch (error) {}
};

const CRefreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(400).json(formatResponse(200, "refresh token required"));
  }
  try {
    const accessToken = await SAuth.refreshToken(refreshToken);
    res.json(formatResponse(200, "success", accessToken));
  } catch (error: any) {
    res.json(formatResponse(400, error.message));
  }
};

export { CLogin, CRegister, CRefreshToken };
