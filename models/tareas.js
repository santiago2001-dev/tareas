const colors = require('colors')
//llamado de modelo 
const Tarea = require('./tarea');
class Tareas {
    _listado  = {}



//vamos a conventir el objeto a un areglo 
get listadoArr(){
    const listado =[];
    //el metodo object.keys nos permite extraer las llaves de el objeto que retorna un arreglo 
    
    Object.keys(this._listado).forEach(key =>{

         const tarea = this._listado[key]
         listado.push(tarea)
     })
    return listado;

}


 constructor(){
    this._listado = {};
       
}

borrarTarea(id =''){
    if(this._listado[id]){
        delete this._listado[id]
    }
}


creaTarea(desc = ''){
    // instancia de clase tarea
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
    
    

}

//espera como parametro la info de el archivo para agregarla a el objeto listado
getTareas(tareas = []){
    tareas.forEach(listTareas=>{
        
        this._listado[listTareas.id] = listTareas; 
    

    })
    
}



getlistado (){
    let aut = 0;
     console.log()
    this.listadoArr.forEach((listTareas)=>{
     aut = aut +1
      const { desc,completadoEn}=  listTareas
      const estado= (completadoEn)
                            ?'completada'.green
                            :'pendiente'.red
    console.log(`${colors.green(aut)}.${desc}| ${estado}`)
      
      
        

         
    })
   
}
    


traerCompletadas(){
    let aut = 0;
    this.listadoArr.forEach((estado)=>{
        aut = aut+1
    
        const { desc,completadoEn}=  estado
    
        const  err = 'no tienes tareas completadas!!'
        if(completadoEn){
            console.log(`${colors.green(aut)}.${desc}\n completada el: ${colors.blue(completadoEn)}`) 
        }
        else{
            console.log('no tienes tareas completadas')
        }

        
    })
}


traerPendientes(){
    let aut = 0;
    this.listadoArr.forEach((estado)=>{
        aut = aut+1
        const {desc,completadoEn} = estado

        const  err = 'no tienes tareas completadas!!'
        if(!completadoEn){
            console.log(`${colors.green(aut)}.${desc}\n ${'pendiente'.red}`) 
        }
        else{
            console.log('no tienes tareas pendienites')
        }
      
    })

}


}





module.exports = Tareas;