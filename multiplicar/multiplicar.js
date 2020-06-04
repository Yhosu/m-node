//requireds
const fs = require( 'fs' );

let listarTabla = ( base, limit = 10 ) => {
    for ( let i = 1; i<= limit; i++ ) {
        console.log( `${ base } * ${ i } = ${ base * i }` );
    }
}





let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( ( resolve, reject ) => {
        if( !Number( base ) ) {
            reject( `La base ${ base } no es un numero` );
            return;
        } 
        let data = '';
        
        for ( let i = 1; i<=limite; i++ ) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject( err )
            else 
                resolve( `tabla-${ base } hasta el ${ limite }` );
        });
        } );
}


module.exports = { crearArchivo, listarTabla }

