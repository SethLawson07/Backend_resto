const {db} =require('../db/connect')
const shortid = require('shortid');
var randomId = require('random-id');

const ajouterCommande = async (req, res) => {
    try {
    

      var len = 4;
      //var pattern = 'aA0'
      var pattern = '09'
      
      let id = parseInt(randomId(len, pattern))
     // console.log(id);
      let table_secteur_id = req.body.table_secteur_id
      let commentaire = req.body.commentaire

      let produit_id = req.body.produit_id
      //let commande_id = req.body.commande_id
      let quantite = req.body.quantite
      let pu = req.body.pu
      let remise = req.body.remise
        
      let nom=req.body.nom
      let image=req.body.image
      let reqSql="INSERT INTO TEST(nom) VALUES(?)"
      let donnees = [nom]
      
      let reqSql_commande = "INSERT INTO COMMANDE(id,table_secteur_id,commentaire) VALUES (?,?,?)"
      let donnees_commande = [id,table_secteur_id,commentaire]

      let reqSql_ligne_commande = "INSERT INTO LIGNE_COMMANDE(produit_id,id,quantite,pu,remise) VALUES(?,?,?,?,?)"
      let donnees_ligne_commande = [produit_id,id,quantite,pu,remise]

      let result = await db.connect(function(err) {
          if (err) throw err;
          db.query(reqSql_commande,donnees_commande, function (err, result, fields) {
            if (err) throw err;
            //console.log(result);
            res.status(200).json(result);
            
            db.query(reqSql_ligne_commande,donnees_ligne_commande)
            console.log(result);
            console.log("True");
           /* console.log('id'+id);
            console.log('2'+table_secteur_id);
            console.log('3',commentaire);
            console.log('4'+produit_id);
            console.log('5'+id);
            console.log('6'+quantite);
            console.log('7'+pu);
            console.log('8'+remise);*/
          });
        });
        
      } catch (error) {
        console.log(error);
        res.status(501).json(error);
      }
     
    };


    const getCommandes = async (req, res) => {
        try {
        
      
       let reqSql = "SELECT * FROM COMMANDE"
          //let donnees = [libelle,image]
      
          let result = await db.connect(function(err) {
              if (err) throw err;
              db.query(reqSql, function (err, result, fields) {
                if (err) throw err;
                //console.log(result);
                res.status(200).json(result);
              });
            });
            
          } catch (error) {
            console.log(error);
            res.status(501).json(error);
          }
      
       
        }

module.exports = {ajouterCommande,getCommandes}