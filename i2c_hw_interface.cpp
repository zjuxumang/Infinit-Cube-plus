#include "i2c_hw_interface.h"

CubeI2C::CubeI2C(MicroBitI2C* i2c_port, uint8_t address)
    : i2c_port_(i2c_port),Addr(address)
      {
}

uint32_t CubeI2C::I2CRead(uint8_t reg_address, uint8_t* temp) {
  int result;
  uint8_t data_buf[4]={0};
  data_buf[0]=0;//read
  data_buf[1]=reg_address;
  result = i2c_port_->write((uint8_t)Addr<<1, (const char *)&data_buf, 4);
  if (result !=0)
      return 1;
  result = i2c_port_->read((uint8_t)Addr<<1, (char *)temp, 1);
  if (result !=0)
      return 1;
  return 0;
}
uint32_t CubeI2C::I2CRead(uint8_t reg_address, uint8_t* temp, uint8_t size) {
  int result;
  uint8_t data_buf[4]={0};
  data_buf[0]=0;//read
  data_buf[1]=reg_address;
  result = i2c_port_->write((uint8_t)Addr<<1, (const char *)&data_buf, 4);
  if (result !=0)
      return 1;
  result = i2c_port_->read((uint8_t)Addr<<1, (char *)temp, size);
  if (result !=0)
      return 1;
  return 0;
}
uint32_t CubeI2C::I2CRead(uint8_t* temp, uint8_t size) {

  return 0;
}

uint32_t CubeI2C::I2CRead2Byte(uint8_t reg_address, uint8_t* temp) {
  int result;
  uint8_t data_buf[4]={0};
  data_buf[0]=0;//read
  data_buf[1]=reg_address;
  result = i2c_port_->write((uint8_t)Addr<<1, (const char *)&data_buf, 4);
  if (result !=0)
      return 1;
  result = i2c_port_->read((uint8_t)Addr<<1, (char *)temp, 2);
  if (result !=0)
      return 2;
  return 0;
}

uint32_t CubeI2C::I2CWrite(uint8_t reg_address, uint8_t value1, uint8_t value2) {
  int ret = 0;
  uint8_t data_buf[4]={0};
  data_buf[0]=1;//write
  data_buf[1]=reg_address;
  data_buf[2]=value1;
  data_buf[3]=value2;
  ret = i2c_port_->write((uint8_t)Addr<<1, (const char *)&data_buf, 4);
  if (ret !=0)
      return 1;
  return ret;
}



