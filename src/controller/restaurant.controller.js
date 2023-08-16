import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { validationMiddleware } from '../middleware/validation.middleware.js';
import {
  createRestaurantDto,
  updateRestaurantDto,
} from '../dto/restaurant.dto.js';

const prisma = new PrismaClient();

export const restaurantController = new Router();

/** ADD RESTUARANT */
restaurantController.post(
  '',
  validationMiddleware({ body: createRestaurantDto }),
  async (req, res) => {
    const { body } = req;
    res.statusCode = 201;
    const result = await prisma.restaurant.create({ data: body });

    res.status(201).json(result);
  },
);

/** GET RESTUARANTS */
restaurantController.get('', async (req, res) => {
  const { page = '1', count = '50' } = req.query;
  const pageNum = Number(page);
  const countNum = Number(count);
  const take = countNum <= 0 ? 1 : countNum;
  const skip = (pageNum - 1) * take;
  const restaurants = await prisma.restaurant.findMany({ skip, take });
  const totalCount = await prisma.restaurant.count();
  const items = {
    restaurants,
    currentPage: pageNum,
    totalCount,
  };
  res.json(items);
});

/** GET RESTAURANT */
restaurantController.get('/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const restaurant = await prisma.restaurant.findFirstOrThrow({
    where: {
      id: Number(restaurantId),
    },
  });
  res.status(200).json({ data: restaurant });
});

/** UPDATE RESTAURANT */
restaurantController.patch(
  '/:restaurantId',
  validationMiddleware({ body: updateRestaurantDto }),
  async (req, res) => {
    const { restaurantId } = req.params;
    const { body } = req;
    const restaurant = await prisma.restaurant.update({
      where: {
        id: Number(restaurantId),
      },
      data: body,
    });
    res.status(200).json({ data: restaurant });
  },
);

/** DELETE RESTAURANT */
restaurantController.delete('/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  console.log(restaurantId);
  const deleteRestaurant = await prisma.restaurant.delete({
    where: {
      id: Number(restaurantId),
    },
  });
  res.status(204).json({});
});
