
valor_maxim = 50

def dibuxar_barra(valor_actual, valor_maxim):
    alcada = int(valor_actual*5/valor_maxim)
    if alcada < 0:
        alacada = 0
    if alcada > 5:
        alcada = 5
    led.stop_animation()

    for x in range(alcada):
        for y in range(5):
            led.plot(x, 4-y)

#Per fer funcionar el Repte 6 descomentar aquest codi i comentar el següent
#while True:
#    temp = input.temperature()
#    dibuxar_barra(temp, valor_maxim)
#    basic.pause(500)
 

x = 2   
y = 2  
inclinacio = 150  

while True:
    led.plot(x, y)        
    basic.pause(50)
    led.unplot(x, y)   
  
    
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    

    if accX <= -inclinacio and x > 0:   
        x -= 1
    if accX >= inclinacio and x < 4:   
        x += 1
    
    if accY <= -inclinacio and y > 0:  
        y -= 1
    if accY >= inclinacio and y < 4:   
        y += 1