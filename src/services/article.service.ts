import { Article } from "@prisma/client";
import prisma from "../config/prismaClient.config";

const findAll = async () => {
  return prisma.article.findMany({
    include: {
      //   promo: true,
      articleTags: {
        include: {
          tag: true,
        },
      },
    },
  });
};

const findById = async (id: string) => {
  return prisma.article.findUnique({
    where: {
      id,
    },
    include: {
      articleTags: {
        include: {
          tag: true,
        },
      },
    },
  });
};

const create = async (data: Omit<Article, "id">) => {
  return prisma.article.create({
    data,
  });
};

const update = async (id: string, data: Partial<Article>) => {
  return prisma.article.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.article.delete({
    where: { id },
  });
};

// article.service.ts
type ArticleCreateData = Article & { tagIds?: string[] };
const createWithTags = async (data: Omit<ArticleCreateData, "id">) => {
  const { tagIds, ...restData } = data;
  return prisma.article.create({
    data: {
      ...restData,
      articleTags: {
        create: tagIds
          ? tagIds.map((tagId) => ({
              tag: { connect: { id: tagId } },
            }))
          : [],
      },
    },
  });
};

const SArticle = {
  findAll,
  findById,
  create,
  update,
  remove,
  createWithTags,
};

export default SArticle;
