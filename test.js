const suma = (numero_uno,numero_dos,callback) => {
    setTimeout( () => {
       var resultado = numero_uno + numero_dos;
       callback((err) => {
           if (err) { console.log('Algo salio mal')}
       },resultado);
    }, 500);
 }
 
 suma(2,5,function(err, resultado){console.log(resultado);})