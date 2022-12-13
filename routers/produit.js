const express = require("express");
const {
  ajouterProduit,
  getProduits,
  getProduit,
  updateProduit,
  getCategories
  
} = require("../controllers/produit");

const router = express.Router();



router.route("/produits").post(ajouterProduit);
router.route("/produits/:id").get(getProduits);
//router.route("/produits/:id").get(getProduit);
//router.route("/produits/:id").put(updateProduit);


router.route("/categories").get(getCategories);



module.exports = router;