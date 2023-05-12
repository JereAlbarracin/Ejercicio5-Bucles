let numero = prompt('Ingrese un numero o salga con apretando ESC')

while(numero != null ){
    switch (numero) {
        case '1':
            alert('Tomate')
            break;
        case '2':
            alert('Papa')
            break;
        case '3':
            alert('Carne')
            break;
        case '4':
            alert('Pollo')
            break;
        default:
            alert('Ingrese un numero distinto o aprete la tecla ESC')
            break;
    }
    numero = prompt('Ingrese un numero')
}