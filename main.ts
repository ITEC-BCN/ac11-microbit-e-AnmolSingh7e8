let accX: number;
let accY: number;
let valor_maxim = 50
function dibuxar_barra(valor_actual: number, valor_maxim: number) {
    let alacada: number;
    let alcada = Math.trunc(valor_actual * 5 / valor_maxim)
    if (alcada < 0) {
        alacada = 0
    }
    
    if (alcada > 5) {
        alcada = 5
    }
    
    led.stopAnimation()
    for (let x = 0; x < alcada; x++) {
        for (let y = 0; y < 5; y++) {
            led.plot(x, 4 - y)
        }
    }
}

// Per fer funcionar el Repte 6 descomentar aquest codi i comentar el següent
// while True:
//     temp = input.temperature()
//     dibuxar_barra(temp, valor_maxim)
//     basic.pause(500)
let x = 2
let y = 2
let inclinacio = 150
while (true) {
    led.plot(x, y)
    basic.pause(50)
    led.unplot(x, y)
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX <= -inclinacio && x > 0) {
        x -= 1
    }
    
    if (accX >= inclinacio && x < 4) {
        x += 1
    }
    
    if (accY <= -inclinacio && y > 0) {
        y -= 1
    }
    
    if (accY >= inclinacio && y < 4) {
        y += 1
    }
    
}
