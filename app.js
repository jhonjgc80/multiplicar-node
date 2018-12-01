const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
       // console.log('crear');
        crearArchivo(argv.base,argv.limite).then(archivo =>{
            console.log(`Archivo creado: ${archivo}`);
            }).catch((err)=>{
            console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}




//para recibir argumentos o parametros desde la terminal
//let argv2 = process.argv;
//console.log(argv.base);

//console.log('limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// console.log(parametro);
// let base  = parametro.split('=')[1];

// console.log(base);

// 
