const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        listadoTareasBorrar,
        pausa,
        mostrarListadoChecklist,
        confirmar,

        leerInput } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

require('colors');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {

        tareas.loadTasksFromArray(tareasDB);

    }

//    tareas.listadoCompleto();

//    await pausa();

    
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc, completadoEn = 'Pendiente')
            break;
            case '2':
                tareas.listadoCompleto();
                //await pausa();
                //Listar las tareas --
                //console.log( tareas.listadoArr );
            break;
            case '3':
                tareas.listarPendientesCompletadas(completada = true);
                //await pausa();
                //Listar las tareas --
                //console.log( tareas.listadoArr );
            break;
            case '4':
                tareas.listarPendientesCompletadas(completada = false);
                //await pausa();
                //Listar las tareas --
                //console.log( tareas.listadoArr );
            break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log( ids );
                tareas.toggleCompletadas( ids );
                //await pausa();
                //Listar las tareas --
                //console.log( tareas.listadoArr );
                //console.log( ids );
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                     if (ok) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada')
                    }
                }
                //await pausa();
                //Listar las tareas --
                //console.log( tareas.listadoArr );
            break;

        }

        guardarDB( tareas.listadoArr );

        await pausa();

    
    } while (opt !== '0'); 

}

main();