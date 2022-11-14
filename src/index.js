const hora = document.querySelector(".hora")
const minuto = document.querySelector(".minuto")
const segundo = document.querySelector(".segundo")
const iniciar = document.querySelector(".iniciar")
const pause = document.querySelector(".pausar")
const continuar = document.querySelector(".continuar")
const zero = document.querySelector(".zerar")

let horas = 00
let minutos = 00
let segundos = 00
let tempoCorrendo = false
let cronometroPorIniciar = false
let botãoPause = false

const relogio = () => {
    tempoCorrendo = true
    if (cronometroPorIniciar === false) {
        const tempo = setInterval(() => {
            if (tempoCorrendo) {
                if (botãoPause === true) {
                    clearInterval(tempo)
                } else if (segundos >= 0 && segundos <= 59) {
                    if (segundos < 9) {
                        segundos++
                        segundo.textContent = `0${segundos}`
                    } else {
                        segundos++
                        segundo.textContent = segundos
                    }
                } else if (segundos > 59 && minutos < 59) {
                    segundos = 0
                    if (minutos <= 9) {
                        minuto.textContent = `0${minutos}`
                    } else {
                        minuto.textContent = `${minutos}`
                    }
                    minutos++
                } else if (minutos >= 59) {
                    minutos = 0
                    horas++
                    if (horas < 10) {
                        hora.textContent = `0${horas}`
                    } else {
                        hora.textContent = `${horas}`
                    }
                }
            }
        }, 0.5)
        cronometroPorIniciar = true
    }
}

const pausar = () => {
    botãoPause = true
    console.log("pausar apertado")

}


const zerar = () => {
    segundo.textContent = `00`
    minuto.textContent = `00`
    hora.textContent = `00`
    horas = 00
    minutos = 00
    segundos = 00
    botãoPause = false
    cronometroPorIniciar = false
}

const continua = () => {
    botãoPause = false
    cronometroPorIniciar = false
    relogio()
}

iniciar.onclick = relogio
pause.onclick = pausar
zero.onclick = zerar
continuar.onclick = continua