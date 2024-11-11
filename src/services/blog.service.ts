import { Blog } from "@prisma/client";
import prisma from "../config/prismaClient.config";

const findAll = async () => {
  return prisma.blog.findMany({});
};

const create = async (data: Omit<Blog, "id">) => {
  return prisma.blog.create({
    data,
  });
};

const SBlog = {
  findAll,
  create,
};

export default SBlog;
