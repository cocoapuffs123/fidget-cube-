input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("bye")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("idk?")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("wassup guys.")
})
basic.forever(function () {
	
})
