const express = require("express");
const {
  ajouterCommande,
  getCommandes
  
} = require("../controllers/commande");

const router = express.Router();



router.route("/commandes").post(ajouterCommande);
router.route("/commandes").get(getCommandes);
/*router.route("/produits/:id").get(getProduit);
router.route("/produits/:id").put(updateProduit);*/



module.exports = router;