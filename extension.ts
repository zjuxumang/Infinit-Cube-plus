//% color="#359eff" weight=20 icon="\uf1b2"
namespace Cube {
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
    export enum IMU_AXIS{
        Yaw,
        Roll,
        Pitch
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
    export function init_port(id:PORT_ID,sensor:Sensor_ID){
        return
    }
    //% block="设置电机%id|模式%dir|功率%pwm"
    //% shim=Cube::Motor pwm.defl=0 pwm.min=0 pwm.max=255
    export function Motor(id:Motor_ID,dir:Motor_Dir,pwm:number){
        return
    }
    //% block="读取陀螺仪数据%dir"
    //% shim=Cube::Get_Imu
    export function Get_Imu(dir:IMU_AXIS){
        return 0
    }
    //% shim=Cube::test
    export function test(){
        return 0
    }
}
