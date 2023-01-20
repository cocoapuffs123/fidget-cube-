let rps = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.LogoUp, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("s")
    } else if (rps == 2) {
        basic.showString("p")
    } else if (rps == 3) {
        basic.showString("r")
    }
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    music.setVolume(255)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("bye")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("idk?")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 C D G B E A G ", 242)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("wassup guys.")
})
basic.forever(function () {
	
})
