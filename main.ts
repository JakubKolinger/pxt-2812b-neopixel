let speed: number = 0;
let stop: number = 1;

let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, 15, NeoPixelMode.RGB);
pasek.showRainbow(1, 360);

basic.forever(function () {
    pasek.rotate(stop);
    pasek.show();
    basic.pause(speed);
});

while (true) { 

    whaleysans.showNumber(speed);

    if (input.buttonIsPressed(Button.A)) {
        if (speed < 99) {
            speed +=1
        }
        basic.pause(400); 
    
        
        while (input.buttonIsPressed(Button.A)) {
            if (speed < 99) {
                speed += 1
            }
            whaleysans.showNumber(speed)
            basic.pause(100); 
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (speed > 0) {
            speed -= 1
        }
        basic.pause(400); 
        while (input.buttonIsPressed(Button.B)) {
            if (speed > 0) {
                speed -= 1
            }
            whaleysans.showNumber(speed)
            basic.pause(100); 
        }
    }
};