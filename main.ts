pins.P16.digitalWrite(false);
basic.pause(10);
pins.P16.digitalWrite(true);
basic.pause(100);
Cube.Init();
basic.showIcon(IconNames.Happy);
music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)