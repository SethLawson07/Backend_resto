
class Commande {
    constructor(id,table_secteur_id,date,commentaire,traiter,tva,payer) {
      this.table_secteur_id = table_secteur_id;
      this.date = date;
      this.commentaire = commentaire;
    }
  }
  
  module.exports = { Commande };