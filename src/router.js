import { Router } from 'express';
import { restaurantController } from './controller/restaurant.controller.js';

export const router = new Router();

router.use('/restaurants', restaurantController);
