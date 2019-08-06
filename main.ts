pins.P16.digitalWrite(false);
basic.pause(10);
pins.P16.digitalWrite(true);
basic.pause(10);
Cube.Init();
basic.showIcon(IconNames.Happy);

while (1)
{
    Cube.Motor(Cube.Motor_ID.M1, Cube.Motor_Dir.Forward, 70);
    Cube.Motor(Cube.Motor_ID.M2, Cube.Motor_Dir.Forward, 70);
    basic.pause(1000);
    Cube.Motor(Cube.Motor_ID.M1, Cube.Motor_Dir.Forward, 0);
    Cube.Motor(Cube.Motor_ID.M2, Cube.Motor_Dir.Forward, 0);
    basic.pause(1000);
    Cube.Motor(Cube.Motor_ID.M1, Cube.Motor_Dir.Backward, 70);
    Cube.Motor(Cube.Motor_ID.M2, Cube.Motor_Dir.Backward, 70);
    basic.pause(1000);
    Cube.Motor(Cube.Motor_ID.M1, Cube.Motor_Dir.Forward, 0);
    Cube.Motor(Cube.Motor_ID.M2, Cube.Motor_Dir.Forward, 0);
    basic.pause(1000);
    // Cube.Init();
    // basic.pause(1000);
}