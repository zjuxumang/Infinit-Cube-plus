//% color="#359eff" weight=20 icon="\uf1b2"
namespace Cube {
    let BUS_SERVO_ENABLE=false;
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
        //% block="十字路口"
        Cross=1,
        //% block="左转路口"
        Left,
        //% block="右转路口"
        Right
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
    //% shim=Cube::Init
    //% block="复位编程盒" advanced=true
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
    //% block="自动标定循线传感器"
    //% shim=Cube::Init_sensor 
    //% advanced=true
    export function Init_sensor(){
        basic.pause(3000)
        return 
    }
    //% block="循线到%end_type||是否等待到达%mode"
    //% shim=Cube::follow_line 
    //% advanced=true
    //% expandableArgumentMode="toggle"
    //% mode.defl=true
    export function follow_line(end_type:End_TYPE,mode?:boolean){
        return 
    }

    //% block="循线完成"
    //% shim=Cube::is_arrive_end
    //% advanced=true
    export function is_arrive_end():boolean{
        return true
    }
    
    /**
     * 立即停止循线（仅在非等待模式下有效）
     */
    //% block="停止循线"
    //% shim=Cube::break_follow
    //% advanced=true
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
    //% advanced=true
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
    //% advanced=true
    export function turn_to_angle(angle: number){
        return 
    } 

    //% block="%dir|距离%dist|mm"
    //% shim=Cube::go_distance
    //% dist.defl=200
    //% advanced=true
    export function go_distance(dir:Go_Distance, dist: number){
        return 
    }

    //% block="%op目标物体"
    //% shim=Cube::suck
    //% advanced=true
    export function suck(op:Sucker_Operation){
        return 
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
