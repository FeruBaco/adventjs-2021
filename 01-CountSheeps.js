// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
// Haz una función que devuelva una lista con todas las ovejas que sean de color
// rojo y que su nombre contenga las letras n y a, sin importar el orden,
// las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

// const ovejas = [
//   { name: 'Noa', color: 'azul' },
//   { name: 'Euge', color: 'rojo' },
//   { name: 'Navidad', color: 'rojo' },
//   { name: 'Ki Na Ma', color: 'rojo'}
// ]
// Al ejecutar el método debería devolver lo siguiente:

// const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// // [{ name: 'Navidad', color: 'rojo' },
// //  { name: 'Ki Na Ma', color: 'rojo' }]

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]

console.log(contarOvejas(ovejas))

function contarOvejas (ovejas) {
  ovejas = ovejas.filter((el) => {
    if (el.name.toLowerCase().includes('na') && el.color === 'rojo') {
      return el
    }
    return ''
  })
  return ovejas
}
