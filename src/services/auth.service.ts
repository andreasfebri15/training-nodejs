import fs from "fs";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { JwtPayload } from "jsonwebtoken";
import { readJsonFile, writeJsonFile } from "../utils";
import { Iuser } from "../interfaces";
import { generaterefreshToken, generateToken, verifyToken } from "../utils/jwt";
import env from "../config/env.config";

let refreshTokens: string[] = [];

const usersFile = "users.json";

const register = async (username: string, password: string) => {
  const users = readJsonFile(usersFile);
  const existingUser = users.some((user: Iuser) => user.username === username);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuid(),
    username,
    password: hashedPassword,
  };
  users.push(newUser);
  writeJsonFile(usersFile, users);
  return {
    id: newUser.id,
    username: newUser.username,
  };
};

const login = async (username: string, password: string) => {
  const users = readJsonFile(usersFile);
  const user = users.find((user: Iuser) => user.username === username);

  if (!user) {
    throw new Error("User not found");
  }

  const ispasswordValid = await bcrypt.compare(password, user.password);
  if (!ispasswordValid) {
    throw new Error("Invalid password");
  }

  const accessToken = generateToken(user.id);
  const refreshToken = generaterefreshToken(user.id);

  refreshTokens.push(refreshToken);
  return { accessToken, refreshToken };
};

const refreshToken = (refreshToken: string) => {
  if (!refreshTokens.includes(refreshToken)) {
    throw new Error("Invalid refresh token");
  }
  const decodedToken = verifyToken(
    refreshToken,
    env.REFRESH_TOKEN_SECRET
  ) as JwtPayload;
  const user = readJsonFile(usersFile).find(
    (user: Iuser) => user.id === decodedToken.userId
  );

  if (!user) {
    throw new Error("User not found");
  }
  const accessToken = generateToken(user.id);
  const newRefreshToken = generaterefreshToken(user.id);

  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  refreshTokens.push(newRefreshToken);
  return { accessToken, refreshToken: newRefreshToken };
};

const SAuth = {
  register,
  login,
  refreshToken,
};

export default SAuth;
