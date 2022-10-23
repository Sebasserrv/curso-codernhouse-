
let user = prompt('ingresa un nombre de usuario')
let pasword = prompt('ingrsa un pasword')
let edad = prompt('ingresa tu edad')

let precios =[ 
surtfista = 45,
biquini = 35,
completo = 40,
competitivo = 60,
]

 if (user == '', pasword == '') {
    alert('ingrese correctamente los datos')
} else {
    tienda()
}
//creando el sistema interactivo de la tienda
function tienda() {
    alert('Bien venid@ a Eva by Ara Battle')
    let seleccion_usuario = prompt('que tipo de traje de  desea? \n 1.surfista \n 2.biquini \n 3.completo \n 4.competitivo' )

    if (seleccion_usuario == 1) {
    alert (user + ' usted eligio')
} else if (seleccion_usuario == 2,seleccion_usuario == 'biquini'){
    alert (user + ' usted eligio')
} else if (seleccion_usuario == 3, seleccion_usuario == 'completo') {
    alert (user + ' usted eligio')
} else if (seleccion_usuario == 4, seleccion_usuario == 'competitivo'){
    alert (user + ' usted eligio')
}

}
