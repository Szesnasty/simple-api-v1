import { Prisma } from '@prisma/client';
import { ValidationError } from 'express-json-validator-middleware';
import { mapErrors } from '../middleware/validation.middleware.js';

export function errorHandler(err, req, res, next) {
  let { message, stack = '', status = 500, errors } = err;

  const computedStack =
    process.env.NODE_ENV === 'development' ? stack.split('\n') : undefined;

  if (err instanceof Prisma.NotFoundError) {
    status = 404;
  }

  if (err instanceof ValidationError) {
    status = 400;
    errors = mapErrors(err.validationErrors.body);
    console.log(errors, 'error');
  }

  res.status(status).json({ message, stack: computedStack, errors });
}
