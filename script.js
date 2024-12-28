//00:00:00 formato do valor recebido
const firstValue = "33:22:11"

 function convert() {

    const partes = firstValue.split(":")

    const horas = partes[0]
    const minutos = partes[1]
    const segundos = partes[2]

let totalDeSegundos = (+horas * 3600) + (+minutos * 60) + +segundos


console.log(`${totalDeSegundos} segundos no total`)

}
convert()