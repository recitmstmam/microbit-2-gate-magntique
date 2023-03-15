radio.onReceivedNumber(function (receivedNumber) {
    T0 = Math.round(input.runningTime() * 1000) / 1000
    while (force < 1000 && T1 == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    T1 += Math.round(input.runningTime() * 1000) / 1000
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    temps = (T1 - T0) / 1000
    for (let index = 0; index < 4; index++) {
        basic.showString("" + temps + " s")
    }
})
let temps = 0
let force = 0
let T1 = 0
let T0 = 0
radio.setGroup(1)
T0 = 0
T1 = 0
force = input.magneticForce(Dimension.Strength)
basic.showIcon(IconNames.No)
