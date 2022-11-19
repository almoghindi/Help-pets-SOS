const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  address: { type: String },
  cart: [
    {
      productId: { type: Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
      imageUrl: { type: String, required: true },
      title: { type: String, required: true },
      secondTitle: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);

 //you defined your schema above, it should be **lowercase**
 //here is the model, model should start capital letter
//  mongoose.models = {};
//  const User = mongoose.model("User", userSchema);

//  function validateUser(user) {
//    const schema = Joi.object().keys({
//      name: Joi.string().required(),
//      phone: Joi.string().required(),
//      email: Joi.string().min(8).max(50).required().email(),
//      password: Joi.string()
//        .min(6)
//        .required()
//        .max(20)
//        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/), //special/number/capital
//      cart: Joi.array().items({
//        productId: Joi.objectId().required(),
//        quantity: Joi.number().required(),
//        imageUrl: Joi.objectId().required(),
//        title: Joi.objectId().required(),
//        secondTitle: Joi.objectId().required(),
//        price: Joi.number().required(),
//      }),
//    });
//    return Joi.validate(user, schema);
//  }

//  module.exports.User = User;
//  module.exports.validate = validateUser;