import { Car } from "@prisma/client";
import prisma from "../config/prismaClient.config";

const findAll = async () => {
  return prisma.car.findMany({
    include: {
      iklan: true,
      blogs: {
        include: {
          blog: true,
        },
      },
    },
  });
};

const findCar = async () => {
  return prisma.car.findMany();
};

const create = async (data: Omit<Car, "id">) => {
  return prisma.car.create({
    data,
  });
};

const SCar = {
  findAll,
  findCar,
  create,
};

export default SCar;
