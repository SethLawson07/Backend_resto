const express = require("express");
const {
  getTables
  
} = require("../controllers/table");

const router = express.Router();


router.route("/tables").get(getTables);



module.exports = router;