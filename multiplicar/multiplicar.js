const fs = require('fs'); //file system
const colors = require('colors');

let dato = '';

let listarTabla = (base,limite) =>{

    console.log('================='.green);
    console.log(`Tabla del ${base}`.red);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {
        let tabla = i*base;
        console.log(`${base} * ${i} = ${tabla}\n`);
        
    }


}

let crearArchivo = (base,limite) =>{
    return new Promise((resolve,reject)=>{

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
        }

        for (let i = 1; i <= limite; i++) {
            let resul = i * base;
            dato += `${base} * ${i} = ${resul}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, dato, (err) => {
          if (err) 
            reject(err);
          else
            resolve((`tabla-${base}.txt`.green))
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
