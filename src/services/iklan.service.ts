import { Iklan } from "@prisma/client";
import prisma from "../config/prismaClient.config";

const findAll = async () => {
  return prisma.iklan.findMany({});
};

const create = async (data: Omit<Iklan, "id">) => {
  return prisma.iklan.create({
    data,
  });
};

const SCar = {
  findAll,
  create,
};

export default SCar;
