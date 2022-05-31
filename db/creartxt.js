const fs = require('fs');
const file ='./db/data.json'


const crearTxt= (info)=>{
 if(!fs.existsSync(file)){
     return null;
 }

 //convertimos el arreglo que recivimos como parametro a string 
 fs.writeFileSync(file,JSON.stringify(info));
}


const readfile =()=>{
    const info = fs.readFileSync(file,{encoding : 'utf-8'});
    //para poder usar la info que obtenemos (por que solo es un str ) la convertimos de nuevo a un objeto 
    const data = JSON.parse(info)
    
    return data
}

module.exports={
    crearTxt,
    readfile
}