// uuid crear un id disitinto 
const {v4}=require('uuid')

class Tarea {
id = '';
desc = '';
completadoEn = null;

constructor(desc){
    this.desc = desc;
    this.id = v4();

}

}

module.exports = Tarea;