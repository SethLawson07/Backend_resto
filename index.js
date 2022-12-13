const express = require('express');
const { connect } = require('./db/connect');
const routerProduit = require('./routers/produit');
const routerCommande = require('./routers/commande');
const routerTable = require('./routers/table')
const app=express();


 

app.get("/",(req,res)=> {
    //console.log("Salut les gars");
    res.send("Salut les gars ")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routerProduit,routerCommande,routerTable);


if(connect){
    console.log("Connexion avec la base de données établie");
    app.listen(3000);
    console.log("Attente des requêtes au port 3OOO");
}
else{
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
}