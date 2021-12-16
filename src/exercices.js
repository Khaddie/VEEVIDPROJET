let chaussures = [
    {
      marque : "Nike",
      titre : "Jordan Air",
      collector : true,
      taillesDispo : [28, 29, 30],
      prix : 300,
      elements : {
        lacets : "rouge",
        corps : "blanc",
        semelle : "bleu"
      }
    },
    {
      marque : "Vans",
      titre : "Old Skool",
      collector : false,
      taillesDispo : [34, 36, 38],
      prix : 70,
      elements : {
        lacets : "noir",
        corps : "marron"
      }
    },
    {
      marque : "Adidas",
      titre : "Stan Smith",
      collector : false,
      taillesDispo : [40, 42, 44],
      prix : 100,
      elements : {
        lacets : "vert",
        corps : "blanc"
      }
    },
    {
      marque : "Nike",
      titre : "Air Force",
      collector : true,
      taillesDispo : [36, 37, 38],
      prix : 200,
      elements : {
        lacets : "bleu",
        corps : "marron"
      }
    },
    {
      marque : "Nike",
      titre : "Air Max",
      collector : true,
      taillesDispo : [36, 38, 40],
      prix : 900,
      elements : {
        lacets : "jaune",
        corps : "vert"
      }
    },
    {
      marque : "Vans",
      titre : "Era",
      collector : false,
      taillesDispo : [30, 32, 40],
      prix : 40,
      elements : {
        lacets : "bleu",
        corps : "noir"
      }
    },
    {
      marque : "Vans",
      titre : "Sk8",
      collector : false,
      taillesDispo : [28, 30, 26],
      prix : 40,
      elements : {
        lacets : "bleu",
        corps : "noir",
        languette : "rouge"
      }
    },
    {
      marque : "Vans",
      titre : "Old Skool",
      collector : false,
      taillesDispo : [36, 28, 60],
      prix : 60,
      elements : {
        lacets : "blanc",
        corps : "noir",
        languette : "noir"
      }
    },
    {
      marque : "Nike",
      titre : "Nike SB",
      collector : false,
      taillesDispo : [30, 31, 32],
      prix : 50,
      elements : {
        lacets : "blanc",
        corps : "noir"
      }
    },
    {
      marque : "Adidas",
      titre : "Old Skool",
      collector : false,
      taillesDispo : [29, 30, 32],
      prix : 70,
      elements : {
        lacets : "rouge",
        corps : "bleu"
      }
    }
  ]
   
  // Faire une boucle sur tout le tableau et de log les chaussures une par une
   
    for(let i=0; i < chaussures.length; i++){
        console.log("la chaussure de marque : " + chaussures[i].marque + " et le modèle " + chaussures[i].titre)
    }

    chaussures.forEach(function(valeur){
    console.log("Chaussure :", valeur)
    })
   
   
  // Log un tableau de toutes les Nikes
   
    let nikes = chaussures.filter(function(valeur){
    return valeur.marque.includes("Nike")
    })

    console.log(nikes)
 
  // Log du prix des Vans "Old Skool"

let vansprix = chaussures.filter(function(valeur){
    if (valeur.marque == "Vans" && valeur.titre == "Old Skool")
    return true
})

vansprix.forEach(function(valeur){
    console.log("prix : ", valeur.prix)
})


  // Log un tableau de toutes les chaussures collector
   
  let shoescollector = chaussures.filter(function(collection){
      if (collection.collector)
      return true
  })
  
  shoescollector.forEach(function(collection){
    console.log("collector :", collection.collector)
    })

    //version du prof
   
    chaussures.filter(function(chaussure){
        return chaussure.collector == true
        }).forEach(function(chaussure){
            console.log("la chaussure de marque : " + chaussure.marque + " et modèle : " +  chaussure.titre + " est " + chaussure.collector)
        })
   
   
  // Log couleur lacets de la vans Sk8
   
   chaussures.filter(function(valeur){
    if (valeur.marque == "Vans" && valeur.titre == "sk8")
    return true
    })

    .forEach(function(valeur){
    console.log("couleur lacet : ", valeur.elements.lacets)
    })


   let laChaussure = chaussure.find(function(chaussure){
        return chaussure.marque == "vans" && chaussure.titre == "sk8"
    })
    console.log(laChaussure.elements.lacets)
   
   
  // Changer la couleur de la vans Sk8 en violet et log la chaussure
  chaussures.filter(function (chaussure) {
    return chaussure.marque == "Vans" && chaussure.titre == "Sk8";
}).forEach(function (chaussure) {
    chaussure.elements.lacets = "violet"
    console.log("La chaussure de la marque : " + chaussure.marque + " et Modèle " + chaussure.titre + "COuleur : " + chaussure.elements.lacets);
})