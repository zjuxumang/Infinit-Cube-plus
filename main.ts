pins.P16.digitalWrite(false);
basic.pause(100);
pins.P16.digitalWrite(true);
basic.pause(10);
// Cube.Init();
Cube.Motor(Cube.Motor_ID.M1, Cube.Motor_Dir.Forward, 0)
Cube.Motor(Cube.Motor_ID.M2, Cube.Motor_Dir.Forward, 0)
Cube.Motor(Cube.Motor_ID.M3, Cube.Motor_Dir.Forward, 0)
Cube.Motor(Cube.Motor_ID.M4, Cube.Motor_Dir.Forward, 0)
basic.showIcon(IconNames.Happy);
