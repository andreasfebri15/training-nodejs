import prisma from "../config/prismaClient.config";

const main = async () => {
  const promo = await prisma.promo.create({
    data: {
      title: "Summar Sale",
    },
  });

  //   const tags = await Promise.all([
  //     prisma.tag.create({
  //       data: {
  //         name: "Technology",
  //       },
  //     }),
  //     prisma.tag.create({
  //       data: {
  //         name: "Lifestyle",
  //       },
  //     }),
  //   ]);

  const tags = await prisma.tag.createManyAndReturn({
    data: [
      {
        name: "Technology",
      },
      {
        name: "Lifestyle",
      },
    ],
  });

  const article = await prisma.article.create({
    data: {
      title: "Getting Started with Prisma",
      content: "This is a sample article about Prisma...",
      promoId: promo.id,
      articleTags: {
        create: tags.map((tag) => ({
          tagId: tag.id,
        })),
      },
    },
  });

  const iklan = await prisma.iklan.create({
    data: {
      name: "Iklan",
      content: "This is a iklan sample article about Prisma...",
      discount: 10,
      image: "https://via.placeholder.com/150",
    },
  });

  const blog = await prisma.blog.create({
    data: {
      title: "blog",
      desc: "This is a blog sample article about Prisma...",
      content: "This is a sample article about Prisma...",
      image: "https://via.placeholder.com/150",
    },
  });

  const car = await prisma.car.create({
    data: {
      image: "https://via.placeholder.com/150",
      name: "Car",
      model: "Model",
      variant: "Variant",
      price: 10000,
      isNew: true,
      IklanId: iklan.id,
    },
  });

  console.log({ promo, tags, article, iklan, blog, car });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
