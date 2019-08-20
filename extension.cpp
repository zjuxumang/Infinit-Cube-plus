#include "pxt.h"
#include "i2c_hw_interface.h"
using namespace pxt;
typedef union{
	struct{
		uint8_t D_pin:3;
		uint8_t A_pin:3;
	};
	uint8_t Port_reg_value;
}Port_Reg;
typedef union{
	struct{
		uint8_t PORT_A:4;
		uint8_t PORT_B:4;
	};
	struct{
		uint8_t PORT_C:4;
		uint8_t PORT_D:4;
	};
	uint8_t Port_reg_value;
}Device_Reg;

namespace Cube {
    CubeI2C* i2c=new CubeI2C(&uBit.i2c,0x70);
    uint8_t Left_wheel=255;
    uint8_t Right_wheel=255;
    uint8_t data[16]={0};
    //%
    void Init() {
        uint8_t temp;
        uint8_t err_cnt=0;
        while(i2c->I2CRead(0x01,&temp)!=0)
        {
            if(err_cnt++>10)
            {
                uBit.display.scroll("init error");
                uBit.reset();
            }
            wait_ms(10);
        }
        // while(i2c->I2CRead(0x02,&temp)==0);
        // i2c->I2CWrite(0x03,1);
    }
    //%
    int test() {
        uint8_t temp;
        return i2c->I2CRead(0x01,&temp);
    }
    //%
    void Motor(int id,int dir,int pwm){        
        i2c->I2CWrite(0x38+id,dir);
        wait_ms(50);
        if(pwm>=0&&pwm<=255)
            i2c->I2CWrite(0x34+id,pwm);
        wait_ms(20);
    }
    //%
    void Set_move_base(int left,int right){
        Left_wheel=left;
        Right_wheel=right;
        Motor(Left_wheel,0,0);
        Motor(Right_wheel,0,0);
    }
    //%
    void move_base(int dir, int speed){
        if(Left_wheel<4&&Right_wheel<4){
            switch(dir){
                case 1:
                    Motor(Left_wheel,1,speed);
                    Motor(Right_wheel,1,speed);
                    break;
                case 2:
                    Motor(Left_wheel,2,speed);
                    Motor(Right_wheel,2,speed);
                    break;
                case 3:
                    Motor(Left_wheel,2,speed);
                    Motor(Right_wheel,1,speed);
                    break;
                case 4:
                    Motor(Left_wheel,1,speed);
                    Motor(Right_wheel,2,speed);
                    break;
                case 0:
                    Motor(Left_wheel,0,speed);
                    Motor(Right_wheel,0,speed);
                    break;
            }
        }
    }
    //%
    void move_motor(int left,int right){
        uint8_t left_dir=left>0?1:2;
        uint8_t right_dir=right>0?1:2;
        Motor(Left_wheel,left_dir,abs(left));
        Motor(Right_wheel,right_dir,abs(right));
    }
    //%
    int Get_Imu(int dir){
        uint8_t data_h,data_l;
        int16_t data=0;
        i2c->I2CRead(0x10+dir*2,&data_h);
        i2c->I2CRead(0x11+dir*2,&data_l);
        data=data_h;
        data=(data<<8)|data_l;
        return data/100;
    }
    //%
    void Set_Pin_Mode(int id,int mode){
        Port_Reg port;
        i2c->I2CRead(0x05+id/2,&port.Port_reg_value);
        if(id%2==0)
        {
            if(mode!=port.D_pin)
            {
                port.D_pin=mode;
                i2c->I2CWrite(0x05+id/2,port.Port_reg_value);
            }    
        }
        else
        {
            if((mode<<3)!=port.A_pin)
            {
                port.A_pin=mode;
                i2c->I2CWrite(0x05+id/2,port.Port_reg_value);
            }
        }
        wait_us(25);    
    }
    //%
    void Set_Pin_Value(int id,int value){
        uint8_t temp;
        i2c->I2CRead(0x09,&temp);
        if(value!=(temp&0x01<<id))
        {
            temp=temp^(0x01<<id);
            i2c->I2CWrite(0x09,temp);
        }    
    }
    //%
    void Set_Pin_PWM(int id,int pwm){
        i2c->I2CWrite(0x20+id,pwm);    
    }
    //%
    int Get_Pin_Value(int id){
        uint8_t temp;
        while(i2c->I2CRead(0x09,&temp)!=0);
        return temp>>id&0x01;
    }
    //%
    int Get_ADC_Value(int id){
        uint8_t temp[2]={0};
        uint16_t adc=0;
        i2c->I2CRead2Byte(0x15+(id+1)/2,temp);
        adc|=(uint16_t)temp[1];
        adc|=(uint16_t)(temp[0]<<8);
        return adc;
    }
    //%
    void Init_Port(int port_id,int sensor_id){
        Device_Reg reg;
        if(port_id<2){
            i2c->I2CRead(0x28,&reg.Port_reg_value);
            if(port_id==0){
                if(sensor_id!=reg.PORT_A){
                    reg.PORT_A=sensor_id;
                    i2c->I2CWrite(0x28,reg.Port_reg_value);
                }
            }
            else{
                if(sensor_id!=reg.PORT_B){
                    reg.PORT_B=sensor_id;
                    i2c->I2CWrite(0x28,reg.Port_reg_value);
                }
            }
        }
        else{
            i2c->I2CRead(0x29,&reg.Port_reg_value);
            if(port_id==2){
                if(sensor_id!=reg.PORT_C){
                    reg.PORT_C=sensor_id;
                    i2c->I2CWrite(0x29,reg.Port_reg_value);
                }
            }
            else{
                if(sensor_id!=reg.PORT_D){
                    reg.PORT_D=sensor_id;
                    i2c->I2CWrite(0x29,reg.Port_reg_value);               
                }
            }
        }
    }
    //%
    void Update_VL53L0X(int begin, int end){
        uint8_t cmd=0;
        uint8_t cnt=end-begin+1;
        cmd=(0x01<<begin)|(0x01<<end);
        i2c->I2CWrite(0x41,cmd);
        while(i2c->I2CRead(data, 2*cnt));
        
    }

    //%
    uint16_t Get_VL53L0X(int index){
        uint16_t ret=data[index*2];
        ret=(ret<<8)|data[index*2+1];
        return ret;
    }
}

