import './scss/main.scss'

// const cartas = ['uno', 'uno1', 'dos', 'dos1', 'tres', 'tres1', 'cuatro', 'cuatro1']
var cartasSeleccionadas = []

/* Seleccion de tarjetas y chequeo de igualdad */
window.cartaElegida = (clickedId) => {
  console.log(clickedId)
  cartasSeleccionadas.push(clickedId)
  console.log(cartasSeleccionadas)
  if (cartasSeleccionadas[0] === cartasSeleccionadas[1]) {
    console.log('son iguales')
    cartasSeleccionadas = []
    document.querySelector('.carta-' + clickedId).style.display = 'none'
    document.querySelector('.carta1-' + clickedId).style.display = 'none'
  } else if (cartasSeleccionadas.length > 1) {
    cartasSeleccionadas = []
  }
}
/* Fin de seleccion de tarjetas y chequeo de igualdad */
