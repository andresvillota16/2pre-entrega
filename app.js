const coleccion = [new trajesBaño("vestido manga larga", "Vestido de baño entero manga larga con proteccción UV, detalle en el centro que te va a estilizar la figura, sin consturas visibles que permite un ajuste perfecto a tu cuerpo", 120.000, "Blanco", "80% poliester y 20% elastano"),
new trajesBaño("Vestido de baño entero", "Vestido de baño picapiedra entero con maya, sin  copas", 155.000, "negro", "88% Poliéster y 12% Elastano"),
new trajesBaño("Vestido de Baño alto Dos Piezas", "Vestido de baño dos piezas con copa prehormadas removibles, top con detalle y 1 solo hombro , tanga alta para mayor comodidad", 160.000, "Azul marino y blanco", "88% Poliéster y 12% Elastano"),
new trajesBaño("Pantaloneta de Hombre flores", "Pantaloneta de hombre con flores, tela impermeable antifluidos, con bolsillos laterales.", 110.000, "Roja y azul", "100% poliester"),
new trajesBaño("Pantaloneta de Hombre", "Pantaloneta de hombre, tela impermeable, con bolsillos laterales", 110.000, "rosada", "100% poliester"),
new trajesBaño("Pantaloneta de Hombre", "Pantaloneta de hombre, tela impermeable antifluidos, con bolsillos laterales", 110.000, "Azul y blanco", "100% poliester"),
];

const carritoCompras = []

let nombre = prompt('Por favor introduzca su nombre');

function trajes() {
    let trajesStock = `Bienvenidos a Piel Canela ${nombre} \n`;
    coleccion.forEach((trajesBaño, index) => {
        trajesStock = trajesStock +
            `${index + 1} - ${trajesBaño.nombre} : ${trajesBaño.descripcion}  \nprecio: ${trajesBaño.precio} \n`;
    });
    let opcion = prompt(trajesStock);

    while(opcion < 1 || opcion > coleccion.length) {
        opcion = prompt(coleccion + 'opcion incorrecta, vuelva a ingresar una opcion: ')
    }

    carritoCompras.push(coleccion[opcion -1]);

}

function carritoCerrado(){
    let total = carritoCompras.reduce ((total, trajesBaño) => {return total + trajesBaño.precio}, 0);
    alert(`Su carrito de compras ha sido cerrado, el total es de ${total}`)
}

function agregar(){
    let opcion;
    do{
        trajes();
        opcion = prompt('desea agregar otro producto al carrito? si/no');
    }while(opcion !== 'no');
}

agregar()
carritoCerrado()


