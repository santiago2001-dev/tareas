colors = require('colors')
//const { pausa } = require('./helpers/mensajes')
const {inquireMenu,inquirePause,readConsole, borrarTrea} = require('./helpers/inquirer')
const {crearTxt,readfile} = require('./db/creartxt')
const Tareas = require('./models/tareas')

console.clear()



const main = async()=>{
   
let opt = '';
// instancia de la clase tarea
const tareas = new Tareas();
const list = readfile();
//await tareas.getlistado(list);

//si ya existe el archivo me agregara el arreglo a el objeto 
    if(list){
        tareas.getTareas(list)

}



    do{
         opt= await inquireMenu();
         
       switch (opt) {
           case '1':
              const desc = await readConsole('Descripcion : ')
                tareas.creaTarea(desc)
                console.log('Tarea creada correctamente!!')
            break;

            case '2':
               
                  tareas.getlistado()
                break;

            
            case '3':
                    tareas.traerCompletadas()
            break;
           
              
            case '4':
                    tareas.traerPendientes()

            break;
             
          
         
            case '5':
                const id = await borrarTrea(tareas.listadoArr);
                
                tareas.borrarTarea(id)
                console.log('tarea borrada correctamente')
                tareas.getlistado()
            break;

            
            case '0':
                //
            break;
       
       
          
       }
       crearTxt(tareas.listadoArr)
       await inquirePause();
    //si es igual a 0 terminara el promgrama
    }while(opt !=='0');
}


 main();