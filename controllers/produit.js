const { db } = require("../db/connect");
const { Produit } = require("../models/produit");


const ajouterProduit = async (req, res) => {
  try {
  
 
   let libelle = req.body.libelle;
   let image = req.body.image;
   let nom = req.body.nom;

    let reqSql = "INSERT INTO produit1(libelle,image) VALUES (?,?) "
    let reqSql1= "INSERT INTO test(nom) VALUES (?) "
    
    let donnees = [libelle,image]
    let donnees1= [nom]


    let result = await db.connect(function(err) {
        if (err) throw err;
        db.query(reqSql,donnees, function (err, result, fields) {
          if (err) throw err;
        //  console.log(result);
          res.status(200).json(result);
          db.query(reqSql1,donnees1)
        });
      });
      
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
   
  };

 

  const getProduits = async (req, res) => {
    try {
    

   let id=parseInt(req.params.id)
   let reqSql = " SELECT nom,description,prixUnitaire,image,qte_stock FROM produit WHERE categorie_produit_id = ?"  
   let donnees = [id]
  
      let result = await db.connect(function(err) {
          if (err) throw err;
          db.query(reqSql,donnees, function (err, result, fields) {
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

    const getProduit = async (req, res) => {
        try {
        
           // let id = req.params.id
          let reqSql = "SELECT * FROM PRODUIt1 where id = ?"
          let donnees = req.params.id
      
          let result = await db.connect(function(err) {
              if (err) throw err;
              db.query(reqSql,donnees, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                res.status(200).json(result);
              });
            });
           
          } catch (error) {
            console.log(error);
            res.status(501).json(error);
          }
      
       
        }
        const getCategories = async (req, res) => {
          try {
          
             // let id = req.params.id
            let reqSql = "SELECT * FROM categorie_produit"
            let donnees = req.params.id
        
            let result = await db.connect(function(err) {
                if (err) throw err;
                db.query(reqSql,donnees, function (err, result, fields) {
                  if (err) throw err;
                  console.log(result);
                  res.status(200).json(result);
                });
              });
             
            } catch (error) {
              console.log(error);
              res.status(501).json(error);
            }
        
         
          }

        const updateProduit = async (req, res) => {
            try {
            
           
             let libelle = req.body.libelle;
             let image = req.body.image;
             let id = req.params.id
          
              let reqSql = "UPDATE produit1 SET libelle = ?, SET image = ? WHERE id ="+[id]
              let donnees = [libelle,image]
          
              let result = await db.connect(function(err) {
                  if (err) throw err;
                  db.query(reqSql,donnees, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    res.status(200).json(result);
                  });
                });
               
              } catch (error) {
                console.log(error);
                res.status(501).json(error);
              }
             
            };




module.exports = {ajouterProduit,getProduits,getProduit,updateProduit,getCategories}
  