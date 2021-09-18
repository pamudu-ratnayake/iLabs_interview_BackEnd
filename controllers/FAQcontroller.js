let FAQs = require("../models/FAQs");

exports.postFAQs = (req, res, next) => {
  const question = req.body.question;
  const category = req.body.category;
  const status = req.body.status;

  const newFAQ = new FAQs({
    question,
    category,
    status,
  });

  newFAQ
    .save()
    .then(() => {
      res.json("FAQ Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//------GET------------
exports.getAllFAQs = (req, res, next) => {
  FAQs.find()
    .then((faqs) => {
      res.json(faqs);
    })
    .catch((err) => {
      console.log(err);
    });
};

//--------update-----------
exports.updateFAQs = async (req, res) => {
  let faq_id = req.params.faq_id;
  const { question, category, status } = req.body;

  const eventUpdate = {
    question,
    category,
    status,
  };

  const update = await FAQs.findByIdAndUpdate(faq_id, faqUpdate)
    .then(() => {
      res.status(200).send({ status: "FAQ Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deleteFAQ = async (req, res) => {
  let faq_id = req.params.faq_id;

  await FAQs.findByIdAndDelete(faq_id)
    .then(() => {
      res.status(200).send({ status: "FAQ Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOneFAQ = async (req, res) => {
  let faq_id = req.params.faq_id;

  await FAQs.findById(faq_id)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      console.log(err);
    });
};
