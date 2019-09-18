//% color="#359eff" weight=20 icon="\uf1b2"
namespace Cube {
    let BUS_SERVO_ENABLE=false;
    export enum GPIO_ID{
        D0,
        A0,
        D1,
        A1,
        D2,
        A2,
        D3,
        A3
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
    export enum VISION_TYPE {
        //% block="🌈 颜色检测"
        VISION_COLOR_DETECT=1,
        //% block="🌈 颜色识别"
        VISION_COLOR_RECOGNITION=2,
        //% block="⚽ 球体检测"
        VISION_BALL_DETECT=3,
        //% block="👥 人体检测"
        VISION_BODY_DETECT=5,
        //% block="🔳 形状卡片"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 交通卡片"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 数字卡片"
        VISION_NUM_CARD_DETECT=8
    }
    export enum IMU_AXIS{
        Yaw,
        Roll,
        Pitch
    }
    //% shim=Cube::Init
    //% block="复位编程盒" advanced=true
    export function Init() {
        Motor(0,0,0)
        Motor(1,0,0)
        Motor(2,0,0)
        Motor(3,0,0)
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
    export function Get_ADC_Value(id:GPIO_ID){
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
    export function Get_Imu(dir:IMU_AXIS){
        return 0
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
    
    //% block="启动MuVisionSensor 算法%algorithm"
    //% shim=Cube::Mu_begin
    export function Mu_beign(algorithm:VISION_TYPE){
        return 
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
