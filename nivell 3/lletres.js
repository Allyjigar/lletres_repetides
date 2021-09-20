
//funció exercici 1

function un(){

    var nom = document.getElementById("nom").value;
    
    var newNom = Array.from(nom);

    for(i=0; i<newNom.length;i++){
        
        console.log(newNom[i]);   
        document.getElementById("resultat").innerHTML += newNom[i] + "\n";
    }

}

//exercici 2

function dos(){
    var nom = document.getElementById("nom").value;
    var newNom = Array.from(nom);

    for(i=0; i<newNom.length;i++){
        if(newNom[i] === "A" || newNom[i] === "E" || newNom[i] === "I" || newNom[i] === "O" || newNom[i] === "U" || newNom[i] === "a" || newNom[i] === "e" || newNom[i] === "i" || newNom[i] === "o" || newNom[i] === "u"){
            console.log("He trobat la VOCAL: " + newNom[i]);
            document.getElementById("resultat").value += "He trobat la VOCAL: " + newNom[i]  + "\n";
        } else if(newNom[i] === "0" || newNom[i] === "1" || newNom[i] === "2" || newNom[i] === "3" || newNom[i] === "4" || newNom[i] === "5" || newNom[i] === "6" || newNom[i] === "7" || newNom[i] === "8" || newNom[i] === "9"){
            console.log("Els noms de persones no contenen el número: " + newNom[i]);
            document.getElementById("resultat").value += "Els noms de persones no contenen el número: " + newNom[i]  + "\n";
        } else {
            console.log("He trobal la CONSONANT: " + newNom[i]);
            document.getElementById("resultat").value += "He trobat la CONSONANT: " + newNom[i]  + "\n";
        }
    }

}

//exercici 3

function tres() {
    
    let nom = document.getElementById("nom").value;
    let newNom = Array.from(nom);
    

    let map = newNom.reduce(function (lletra, index) {
            lletra[index] = (lletra[index] || 0) + 1;
            return lletra;
        }, {});
    

        document.getElementById("resultat").innerHTML += JSON.stringify(map);

        console.log(map);
    
}

//exercici 4

function quatre(){
    var nom = document.getElementById("nom").value;
    var cognom = document.getElementById("cognom").value;
    var espai = " ";

    if(cognom === ""){
        alert("Per fer aquest exercici has d'omplir nom i cognom");
    }

    var newNom = Array.from(nom);
    var newCognom = Array.from(cognom);

    var fullName = newNom.concat(espai, newCognom);

    console.log(fullName);
    
    for(i=0; i<fullName.length;i++){

        document.getElementById("resultat").innerHTML += fullName[i] + "\n";
    }   
}

//funcio nivell 2

function buscar(){

    var str = document.getElementById("text").value;

        function extraeMail(str){

            return str.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9\u00f1!#$%&'*+/=?^_`{|}~-])*(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*/gi);

        }

        var mails = (extraeMail(str));

        var mailsFinal = mails.filter((item, index)=>{
            return mails.indexOf(item) === index;
        })

        console.log(mailsFinal);
        for(i=0; i<mailsFinal.length;i++){
            document.getElementById("emails").innerHTML += mailsFinal[i] + "\n";
        }
        
}





