const inquirer = require('inquirer');

require('colors')
//inquire nnos permite crear menus iunteractivos por consola trabaja con aync y await

//las opciones que queremos tener se guardan en un arreglo
const questions = [
    {
        type : 'list',
        name : 'opt',
        message : '¿que deseas hacer?',
        choices :[
            {
                value : '1',
                name :`${'1.'.green}crear tareas`
            },
            {
                value :'2',
                name :`${'2.'.green}listar tarea(s)`
            },
            {
                value : '3',
                name :`${'3.'.green}listar tareas completadas`
                
            },
            {
                value: '4',
                name :`${'4.'.green}listar tareas pendientes`
                
            },
         
            {
                value: '5',
                name :`${'5.'.green}borrar tarea`
                
                          
            },
            {
                value: '0',
                name :`${'0.'.green}salir`
            
            }
        ]
        }

]



const inquirePause = async()=>{
    const pause = [{
        type: 'input',
        name : 'opt',
        message: `preciona ${'ENTER'.green} para continuar\n`
    
    
    }]
     await inquirer.prompt(pause);
    
}



const inquireMenu =  async()=>{
    console.clear()
    console.log('========================'.america)
    console.log('seleccione una opción')
    console.log('========================\n'.america)
    const {opt}  = await inquirer.prompt(questions);
    return opt
}


const readConsole = async(mensaje)=>{
   const question =[
       {
           type : 'input',
           name  :'desc',
           mensaje,
           validate(value){
               if(value.length === 0){
                    return 'ingrese un valor';
               }
               return true;
           }

    }
 ]

 const {desc} = await inquirer.prompt(question);
 return desc;


}



const borrarTrea = async(tareas = [])=>{
    let aut = 0;
   
    
    const choices = tareas.map(tarea=>{
        aut = aut +1
        return{
            value : tarea.id,
            name : `${colors.green(aut)} ${tarea.desc}`
        }

    })

    const options = [
        {
            type : 'list',
            name :'id',
            message : 'borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(options);
    return id;

}

module.exports = {
    inquireMenu,
    inquirePause,
    readConsole,
    borrarTrea
}