const { db } = require("../db/connect");

const getTables = async (req, res) => {
    try {
    
  
   let reqSql = " SELECT s.libelle,ts.numero  FROM SECTEUR s , TABLE_SECTEUR ts WHERE s.id = ts.secteur_id   "
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

module.exports = {getTables}