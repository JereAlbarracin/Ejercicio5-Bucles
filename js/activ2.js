let nombre = prompt('Ingrese un nombre')
const todosNombres = []
while (nombre != 'Voldemort') {
    todosNombres.push(nombre)
    nombre = prompt('Ingrese un nombre')
}
alert('Los nombres son ' + todosNombres)
