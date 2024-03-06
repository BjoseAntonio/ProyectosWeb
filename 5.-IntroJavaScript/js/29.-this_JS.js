//Parabra reserva This

const reservacion = {
    nombre: 'aldo',
    apellido: 'Zazueta',
    total: 3500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de $${this.total}`)
    }
}


reservacion.informacion();