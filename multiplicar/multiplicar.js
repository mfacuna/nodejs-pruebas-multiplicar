//required
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base '${base}' no es un numero`.red)
            return
        }
        if (!Number(limite)) {
            reject(`El valor limite '${limite}' no es un numero`.red)
            return
        }
        let data = `===============\n`.green
        data += `Tabla del ${base}\n`.yellow
        data += `===============\n`.red
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
        resolve(data)
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de base '${base}' no es un numero`)
            return
        }
        if (!Number(limite)) {
            reject(`El valor del limite '${base}' no es un numero`)
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}