const router = require("express").Router();
let FAQ = require("../controllers/FAQcontroller");

router.post("/add-faq", FAQ.postFAQs);
router.get("/view-faqs", FAQ.getAllFAQs);
router.put("/update-faq/:faq_id", FAQ.updateFAQs);
router.delete("/delete-faq/:faq_id", FAQ.deleteFAQ);
router.get("/view-one-faq/:faq_id", FAQ.getOneFAQ);

module.exports = router;