valor_actual = input.temperature()
valor_maxim = 50

def on_button_pressed_a():
    led.plot(valor_actual, valor_maxim)
input.on_button_pressed(Button.A, on_button_pressed_a)
