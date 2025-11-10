let valor_actual = input.temperature()
let valor_maxim = 50
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.plot(valor_actual, valor_maxim)
})
