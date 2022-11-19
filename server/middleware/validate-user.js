const Joi = require("joi");

  const validateUser = (user) => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      phone: Joi.string().required(),
      email: Joi.string().min(8).max(50).required().email(),
      password: Joi.string()
        .min(6)
        .required()
        .max(20)
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/), //special/number/capital
      cart: Joi.array().items({
        productId: Joi.string().required(),
        quantity: Joi.number().required(),
        imageUrl: Joi.string().required(),
        title: Joi.string().required(),
        secondTitle: Joi.string().required(),
        price: Joi.number().required(),
      }),
    });
    return schema.validate(user);
  }


module.exports = validateUser;