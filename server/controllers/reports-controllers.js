const Report = require('../models/report');
const User = require('../models/user');
const HttpError = require("../models/http-error");

const createReport = async (req, res, next) => {
  const { city, state, address, report } = req.body;
  let createdReport;
  if(req.body.userId !== undefined){
      let existingUser;
   try {
    existingUser = await User.findOne({ userId: req.body.userId });
    createdReport = new Report({
      name: existingUser.name,
      email: existingUser.email,
      phone: existingUser.phone,
      city,
      state,
      address,
      report,
    });
   } catch (err) {
    const error = new HttpError(
     "Report failed, please try again later.",
     500
    );
    return next(error);
   }
 }
  else {
   createdReport = new Report({
     name: req.body.fullname,
     email: req.body.email,
     phone: req.body.phone,
     city,
     state,
     address,
     report,
   });
 }
  try {
   await createdReport.save();
 } catch (err) {
   console.log(err);
   const error = new HttpError(
     "Report failed, please try again later.",
     500
   );
   return next(error);
 }
  res.json({ msg: "successfull" });
};

exports.createReport = createReport;