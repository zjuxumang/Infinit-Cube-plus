pins.P16.digitalWrite(false);
basic.pause(1);
pins.P16.digitalWrite(true);
basic.pause(200);
Cube.Init();
serial.redirect(
    SerialPin.P8,
    SerialPin.P12,
    BaudRate.BaudRate9600
    )
    basic.pause(100)
    MUVisionSensor.begin(MUVisionSensor.SENSORS.MU00, MUVisionSensor.PORT.Serial)
    MUVisionSensor.VisionBegin(MUVisionSensor.SENSORS.MU00, MUVisionSensor.ENABLES.enable, MUVisionSensor.VISION_TYPE.VISION_COLOR_RECOGNITION)
    MUVisionSensor.set_WB(MUVisionSensor.SENSORS.MU00, MUVisionSensor.WBMODE.WB_LOCK)
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        led.plot(j, i)
        basic.pause(50)
    }
}
basic.showIcon(IconNames.Happy);
