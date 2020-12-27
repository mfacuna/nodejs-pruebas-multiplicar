const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            })
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                let nombreArchivo = archivo.green
                console.log(`Archivo creado: ${nombreArchivo}`)
            })
            .catch(e => {
                console.log(e)
            })
        break

    default:
        console.log('comando no reconocido')
        break
}

//console.log(argv)
/* let argv2 = process.argv
let parametro = argv[2]
let base = parametro.split('=')[1] */