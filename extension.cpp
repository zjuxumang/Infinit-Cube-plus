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
namespace Cube {
    CubeI2C* i2c=new CubeI2C(&uBit.i2c,0x70);
    //%
    void Init() {
        uint8_t temp;
        i2c->I2CRead(0x01,&temp);
        i2c->I2CRead(0x02,&temp);
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
        if(pwm>=0&&pwm<=255)
            i2c->I2CWrite(0x34+id,pwm);
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
}

