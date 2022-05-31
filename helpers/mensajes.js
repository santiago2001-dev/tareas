const { resolve } = require('path');

colors =require('colors');


const monstrarMenu=()=>{
    return new Promise((resolve=>{
        console.clear()
        console.log('========================'.america)
        console.log('seleccione una opción')
        console.log('========================\n'.america)
        console.log(`${'1'.america}.crear tareas`)
        console.log(`${'2'.america}.listar tareas`)
        console.log(`${'3'.america}.listar tareas completadas`)
        console.log(`${'4'.america}.listar tareas pendientes`)
        console.log(`${'5'.america}.completar tarea`)
        console.log(`${'6'.america}.borrar tarea`)
        console.log(`${'0'.america}.salir\n`)
        //capturar informacion de usuario x consola
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
            
        });
        //la variable opt que se envía como agurmento es la que gurada la opción del usuario
        readLine.question('S.elecciona una opción: ',(opt)=>{
        readLine.close();
            resolve(opt);        
        
        })
}))
}


//funcion pausa para que el programa pare para que el usuario pueda ingresar su elección
const pausa=()=>{
    return new Promise((resolve =>{
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readLine.question(`\nprecione ${'ENTER'.america} para continuar\n`,(opt)=>{
        readLine.close();
        resolve()
    })
        }))
}





module.exports = {
    monstrarMenu,
    pausa
}