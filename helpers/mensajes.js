const { Console } = require('console');
const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise ( (resolve, reject) => {
        console.clear();
        console.log('=========================='.green);
        console.log('  Selecciones una opción'.green);
        console.log('==========================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listas tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout 
         });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            
            if ( opt === '0'|| opt === '1' || opt === '2'|| opt === '3'|| opt === '4'|| opt === '5'|| opt === '6' ) {
                resolve(opt);
            } else {
                reject('Valor incorrecto, debe ingresar una opción válida')
            }   
        })
    })
    .catch((err)=> {
        console.log(err)   
    })
    
}

const pause = () => {
    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout 
        });
    
        readline.question(`\nPresione ${'Enter '.blue}para continuar\n`, () => {
            readline.close();
            resolve();
        })
    })
}

module.exports = {
    mostrarMenu,
    pause
}