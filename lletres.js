//exercici 1

var nom = ["A", "L", "I", "C", "I", "A"];

for(i=0; i<nom.length;i++){
    console.log(nom[i]);
}

//exercici 2

var nom = ["A", "L", "I", "C", "7", "A"];

for(i=0; i<nom.length;i++){
    if(nom[i] === "A" || nom[i] === "I"){
        console.log("He trobat la VOCAL: " + nom[i]);
    } else if(nom[i] === "0" || nom[i] === "1" || nom[i] === "2" || nom[i] === "3" || nom[i] === "4" || nom[i] === "5" || nom[i] === "6" || nom[i] === "7" || nom[i] === "8" || nom[i] === "9"){
        console.log("Els noms de persones no contenen el número: " + nom[i]);
    } else {
        console.log("He trobal la CONSONANT: " + nom[i]);
    }
}

//exercici 3

var nom = ["A", "L", "I", "C", "I", "A"];
var result={};

var result = nom.map(function(lletra, index){
     if (!lletra[index])
         lletra[index] = 0;
         ++ lletra[index];
         return lletra;
     }     
);


console.log(result);

//amb reduce

    // var result = nom.reduce((lletra, i) => {lletra[i] = (lletra[i] || 0)+1;
    //     return lletra}, {} );

    // console.log(result);

// amb for

    // for(i = 0; i < nom.length; ++i) {
    //      if(!result[nom[i]])
    //     result[nom[i]] = 0; 
    //     ++result[nom[i]];
    //      }
    
    // console.log(result);



// exercici 4

var nom = ["A", "L", "I", "C", "I", "A"];
var cognom = ["J", "I", "M", "E", "N", "E", "Z"];
var espai = " ";

var fullName = nom.concat(espai, cognom);

console.log(fullName);

//NIVELL 2

var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

function extraeMail(str){
    return str.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9\u00f1!#$%&'*+/=?^_`{|}~-])*(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*/gi);
}

var mails = (extraeMail(str));

var mailsFinal = mails.filter((item, index)=>{
    return mails.indexOf(item) === index;
})
console.log(mailsFinal);







