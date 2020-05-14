let Payload = ""
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate115200
)
serial.setWriteLinePadding(0)
basic.forever(function () {
    basic.pause(15000)
    Payload = "" + cayenneLPP.packHexString("Hello") + "2C20576F726C6421"
    serial.writeLine("AT+NMGS=" + convertToText(Payload.length / 2) + "," + Payload)
})
