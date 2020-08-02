const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarear por hacer'
}

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
    //--------------------------------------------------------------------------
const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borramos una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}