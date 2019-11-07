//% color="#359eff" weight=20 icon="\uf1b2"
namespace Cube {
    let BUS_SERVO_ENABLE=false;
    let Color_Recognize:number;
    export enum GPIO_ID{
        A0,
        A1,
        B0,
        B1,
        C0,
        C1,
        D0,
        D1,
        E0,
        E1,
        F0,
        F1,
        G0,
        G1,
        H0,
        H1
    }
    export enum Analog_Pins{
        A0,
        A1,
        B0,
        B1,
        C0,
        C1,
        D0,
        D1
    }
    export enum PORT_ID{
        //% block="端口A"
        PORTA,
        //% block="端口B"
        PORTB,
        //% block="端口C"
        PORTC,
        //% block="端口D"
        PORTD
    }
    export enum Pin_MODE{
        //% block="输入"
        INPUT_NOPULL,
        //% block="上拉输入"
        INPUT_PULLUP,
        //% block="下拉输入"
        INPUT_PULLDOWN,
        //% block="数字输出"
        OUTPUT,
        //% block="模拟输出"
        PWM,
        //% block="模拟输入(仅支持模拟引脚)"
        ADC
    }
    export enum Pin_Level{
        //% block="高"
        High,
        //% block="低"
        Low
    }
    export enum Sensor_ID{
        //% block="按钮模块"
        Button,
        //% block="触摸模块"
        Touch,
        //% block="手势&颜色模块"
        Gesture,
        //% block="红外光电模块"
        IR,
        //% block="超声波测距模块"
        Ultrasonar,
    }
    export enum Motor_ID{
        M1,
        M2,
        M3,
        M4
    }
    export enum Motor_Dir{
        //% block="正转"
        Forward=1,
        //% block="反转"
        Backward=2,
        //% block="刹车"
        Brake=0
    }
    export enum Move_base_dir{
        //% block="前进"
        Forward=1,
        //% block="后退"
        Backward=2,
        //% block="左转"
        Turn_left=3,
        //% block="右转"
        Turn_right=4,
        //% block="刹车"
        Brake=0
    }

    export enum IMU_AXIS{
        Yaw,
        Roll,
        Pitch
    }

    export enum End_TYPE{
        //% block="左转路口"
        Left=2,
        //% block="右转路口"
        Right=3,
        //% block="左转或右转路口"
        Cross=1,
    }

    export enum Sucker_Operation{
        //% block="吸起"
        Hold,
        //% block="释放"
        Release
    }

    export enum Go_Distance{
        //% block="前进"
        Forward,
        //% block="后退"
        Backward
    }

    export enum Is_Wait{
        //% block="是"
        Blocking=1,
        //% block="否"
        NonBlocking=0
    }

    //% block="复位编程盒" advanced=true
    //% shim=Cube::Init
    export function Init() {
        return
    }

    //% block="设置引脚模式%id|%mode"
    //% shim=Cube::Set_Pin_Mode
    export function Set_Pin_Mode(id:GPIO_ID,mode:Pin_MODE){
        return
    }
    //% block="数字输出 引脚%id 设为%level"
    //% shim=Cube::Set_Pin_Value
    export function Set_Pin_Value(id:GPIO_ID,level:Pin_Level){
        return
    }
    //% block="模拟输出 引脚%id 设为%pwm"
    //% shim=Cube::Set_Pin_PWM
    export function Set_Pin_PWM(id:GPIO_ID,pwm:number){
        return
    }
    //% block="数字读取 引脚%id"
    //% shim=Cube::Get_Pin_Value
    export function Get_Pin_Value(id:GPIO_ID){
        return 0
    }
    //% block="模拟读取 引脚%id"
    //% shim=Cube::Get_ADC_Value
    export function Get_ADC_Value(id:Analog_Pins){
        return 0
    }
    //% block="初始化%port|为%sensor"
    //% shim=Cube::Init_Port
    export function init_port(id:PORT_ID,sensor:Sensor_ID){
        return
    }
    //% block="设置马达%id|模式%dir|功率%pwm"
    //% shim=Cube::Motor pwm.defl=0 pwm.min=0 pwm.max=255
    export function Motor(id:Motor_ID,dir:Motor_Dir,pwm:number){
        return
    }
    //% block="读取陀螺仪数据%dir"
    //% shim=Cube::Get_Imu 
    //% advanced=true
    export function Get_Imu(dir:IMU_AXIS){
        return 0
    }

    //% block="初始化视觉模块"
    //% group="综合技能"
    export function Init_MU(){
        serial.redirect(
        SerialPin.P8,
        SerialPin.P12,
        BaudRate.BaudRate9600
        )
        basic.pause(100)
        MUVisionSensor.begin(MUVisionSensor.SENSORS.MU00, MUVisionSensor.PORT.Serial)
        MUVisionSensor.VisionBegin(MUVisionSensor.SENSORS.MU00, MUVisionSensor.ENABLES.enable, MUVisionSensor.VISION_TYPE.VISION_COLOR_RECOGNITION)
        MUVisionSensor.set_WB(MUVisionSensor.SENSORS.MU00, MUVisionSensor.WBMODE.WB_LOCK)
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Whole))
    }

    //% block="自动标定循线传感器"
    //% shim=Cube::Init_sensor 
    //% group="综合技能"
    export function Init_sensor(){
        basic.pause(3000)
        return 
    }

    //% block="循线到%end_type||是否等待到达%mode速度%speed"
    //% shim=Cube::follow_line 
    //% group="综合技能"
    //% expandableArgumentMode="toggle"
    //% mode.defl=1
    //% speed.defl=100 speed.max=100 speed.min=70
    export function follow_line(end_type:End_TYPE,mode?:Is_Wait,speed?:number){
        return 
    }
    
    //% block="循线到第%count个路口|速度%speed||是否等待到达%mode"
    //% shim=Cube::follow_line_n 
    //% group="综合技能"
    //% expandableArgumentMode="toggle"
    //% count.defl=3
    //% speed.defl=100 speed.max=100 speed.min=70
    export function follow_line_n(count:number,speed:number,mode?:Is_Wait){
        return 
    }

    //% block="循线完成"
    //% shim=Cube::is_arrive_end
    //% group="综合技能"
    export function is_arrive_end():boolean{
        return true
    }
    
    /**
     * 立即停止循线（仅在非等待模式下有效）
     */
    //% block="停止循线"
    //% shim=Cube::break_follow
    //% group="综合技能"
    export function break_follow(){
        return 
    }

    /**
     * 
     * @param angle 旋转的角度，顺时针为正，逆时针为负
     */
    //% block="原地转向%angle°"
    //% shim=Cube::turn_angle
    //% angle.defl=90
    //% group="综合技能"
    export function turn_angle(angle: number){
        return 
    }    

    /**
     * 
    * @param angle 旋转到指定角度，以开机时车头正对的角度为0°，顺时针为正，设置范围为-180~180
     */
    //% block="原地转向到面向%angle°"
    //% shim=Cube::turn_to_angle
    //% angle.defl=90
    //% group="综合技能"
    export function turn_to_angle(angle: number){
        return 
    } 

    //% block="%dir|距离%dist mm||速度%speed"
    //% shim=Cube::go_distance
    //% dist.defl=200
    //% group="综合技能"
    //% expandableArgumentMode="toggle"
    //% speed.defl=200 speed.max=600 speed.min=100
    export function go_distance(dir:Go_Distance, dist: number, speed?:number){
        return 
    }

    //% block="%op目标物体"
    //% shim=Cube::suck
    //% group="综合技能"
    export function suck(op:Sucker_Operation){
        return 
    }
    export enum object_color{
        //% block="蓝色"
        Blue=1,
        //% block="黄色"
        Yellow=2,
        //% block="红色"
        Red=3,
        //% block="绿色"
        Green=4,
        //% block="无"
        None=0
    }
    //% block="启动颜色检测"
    //% group="综合技能"
    export function Object_Detect(){
        let yellow = 0
        let blue = 0
        let red = 0
        let green = 0
        Color_Recognize=0
        while (!(Cube.is_arrive_end())) {
            if (MUVisionSensor.MuVs2GetColorRCGLabel(MUVisionSensor.SENSORS.MU00, 50, 100)) {
                let color = MUVisionSensor.get_color_value(MUVisionSensor.SENSORS.MU00, MUVisionSensor.ColorParams.LABLE)
                switch(color){
                    case MUVisionSensor.COLOR_TYPE.BLUE:blue++;break;
                    case MUVisionSensor.COLOR_TYPE.YELLOW:yellow++;break;
                    case MUVisionSensor.COLOR_TYPE.RED:red++;break;
                    case MUVisionSensor.COLOR_TYPE.GREEN:green++;break;
                }
            }
            basic.pause(50)
        }
        
        if (blue > yellow&&blue>red&&blue>green) {
            Color_Recognize=1
        } else if (yellow > blue&&yellow>red&&yellow>green) {
            Color_Recognize=2
        } else if (red > blue&&red>yellow&&red>green) {
            Color_Recognize=3
        } else if (green > blue&&green>red&&green>yellow) {
            Color_Recognize=4
        } else {
            Color_Recognize=0
        }
    }
    //% block="检测到物体颜色为%color"
    //% group="综合技能"
    export function Get_Color(color:object_color){
        if(Color_Recognize==color)
            return true
        else
            return false
    }
    
    //% block="总线舵机控制|ID %ID|角度 %value|时间 %time ms"
    //% time.defl=500 time.min=0
    //% value.min=0 value.max=180
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=4
    //% advanced=true
    export function bus_Servo(ID: number, value: number, time: number): void {
        if(!BUS_SERVO_ENABLE){
            serial.redirect(SerialPin.P8,SerialPin.P12,115200);
            BUS_SERVO_ENABLE=true;
        }
        serial.writeString("#");
        if(ID<10)
            serial.writeString("00");
        else if(ID<100)
            serial.writeString("0");
        serial.writeNumber(ID);
        serial.writeString("P");
        let pwm=Math.map(value,0,180,500,2500);
        pwm=Math.round(pwm);
        if(pwm<1000){
            serial.writeString("0");
        }
        serial.writeNumber(pwm);
        serial.writeString("T");
        if(time<1000){
            serial.writeString("0");
        }
        serial.writeNumber(time);
        serial.writeString("!");
    }
    //% block="初始化底盘 左马达%left|右马达%right"
    //% shim=Cube::Set_move_base group="底盘控制"
    export function Set_move_base(left:Motor_ID,right:Motor_ID){
        return
    }
    //% block="底盘控制 %dir| 速度%speed"
    //% shim=Cube::move_base group="底盘控制"
    export function move_base(dir:Move_base_dir, speed:number){
        return
    }
    //% block="设置 左马达%left| 右马达%right 速度（±255）"
    //% left.min=-255 left.max=255 right.min=-255 right.max=255
    //% shim=Cube::move_motor group="底盘控制"
    export function move(left:number, right:number){
        return
    }
    //% block="设置 左轮%left| 右轮%right 速度mm/s（±800）"
    //% left.min=-800 left.max=800 right.min=-800 right.max=800
    //% shim=Cube::move_motor_close group="底盘控制"
    export function move_close(left:number, right:number){
        return
    }
    //% block="获取测距传感器数据 编号%begin|至%end"
    //% advanced=true
    export function Get_VL53L0X(begin:number,end:number){
        let data=[0]
        _update_vl53l0x(begin,end);
        for (let index = 0; index < end-begin+1; index++) {
            data.push(_get_vl53l0x(index))
        }
        data.shift()
        return data
    }

    //% shim=Cube::Update_VL53L0X
    export function _update_vl53l0x(begin:number,end:number){
        return
    }
    //% shim=Cube::Get_VL53L0X
    export function _get_vl53l0x(index:number){
        return 0
    }

    //% shim=Cube::test
    export function test(){
        return 0
    }
}
