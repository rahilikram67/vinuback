const categories = require("../src/model/Category");
exports.addNewbank = async function (req, res) {
  try {
    await categories
      .updateOne(
        { titlecategory: "Bank" },
        {
          $push: {
            category: {
              bank: req.body.bank,
              code: req.body.code,  
              category: req.body.code + "-" + req.body.bank,
              whose: req.body.whose,
            },
          },
        }
      ,{upsert:true})
      .exec();
  } catch (error) {
      res.send({message:"error"})
  }
};
