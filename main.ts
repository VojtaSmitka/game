basic.forever(function () {
	
})


function zobrazitHodiny(){
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(2, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
}

zobrazitHodiny()