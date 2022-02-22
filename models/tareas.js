const { blue, white, green, red } = require('colors');
const Tarea = require('./tarea');

class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key]; 
            listado.push(tarea);
        })
        
    return listado;    
    }

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '', completadoEn = 'Pendiente') {
        const tarea = new Tarea(desc, completadoEn);
        this._listado[tarea.id]= tarea;
    }

    //revisar
    borrarTarea( id = '') {
    delete this._listado[id];
    }  

    listadoCompleto() {
    //   const listado2 = [];
    let cont = 1;
    let estado = 'Pendiente';
    //    console.log('\n');
        Object.keys(this._listado).forEach((key) => {
            if ((this._listado[key].completadoEn) == "Pendiente") {
                const descripcion = this._listado[key].desc;
                const estado = this._listado[key].completadoEn;
                

                console.log(red(cont+'.', descripcion, estado )); 
                cont+= 1;
            } else {
                const descripcion = this._listado[key].desc;
                const estado = this._listado[key].completadoEn;

                console.log(green(cont+'.', descripcion, estado )); 
                cont+= 1;

            } 
        });
        console.log('\n');
    }

/*   listadoCompleto() {
        const listado2 = [];
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key].completadoEn; 
            listado2.push(tarea);
        });
        console.log(listado2); 
        
    return listado2;
    } */

// List all tasks
    listadoCompleto(){
        console.log();
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i+1}.`.green;
            const { desc, completadoEn } = tarea;
            let estado = 'inicial'
            if ( completadoEn == 'Pendiente' ) {
                  estado = 'Pendiente'.red
            } else {
                  estado = 'Completada'.green
            }

            console.log(`${ idx } ${ desc } :: ${ estado }`);
                                    
        });
        console.log();
    }
// List pending tasks 
listarPendientesCompletadas(completada){
    console.log();
    this.listadoArr.forEach( (tarea, i) => {
        const idx = `${i+1}.`.green;
        const { desc, completadoEn } = tarea;
        let estado = 'inicial'
        if ( completadoEn == 'Pendiente' ) {
              estado = 'Pendiente'.red
        } else {
              estado = `${completadoEn}`.green
        }
        
        if ( completada == false ) {
            if ( completadoEn == 'Pendiente' ) {
                console.log(`${ idx } ${ desc } :: ${ estado }`);
            }
        } else {
            if ( completadoEn !== 'Pendiente' ) {
                console.log(`${ idx } ${ desc } :: ${estado}`);
            }
        }
        
                                
    });
    console.log();
}

// List completed tasks

    loadTasksFromArray ( tareas = [] ) {
        tareas.forEach( (tarea) => {
            this._listado[tarea.id] = tarea;
        } )

    }

    toggleCompletadas( ids = [] ) {
        ids.forEach ( id => {
            const tarea = this._listado[id];
            if ( tarea.completadoEn == 'Pendiente' ) {
                tarea.completadoEn = new Date().toISOString()
            }  
        })
    }
}

module.exports = Tareas;