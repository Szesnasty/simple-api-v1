const NAME = 'name';
const ADDRESS = 'address';
const TYPE = 'type';

const baseSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    [NAME]: {
      type: 'string',
    },
    [ADDRESS]: {
      type: 'string',
    },
    [TYPE]: {
      type: 'string',
    },
  },
};

export const createRestaurantDto = {
  ...baseSchema,
  required: [NAME, ADDRESS],
};

export const updateRestaurantDto = {
  ...baseSchema,
  anyOf: [{ required: [NAME] }, { required: [ADDRESS] }, { required: [TYPE] }],
};
