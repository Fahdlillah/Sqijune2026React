import React from 'react'
import assets from "../assets/hero-image.jpeg"
import AppButton from './AppButton';
const Hero = () => {
  return (
    <div style={style.hero}>
      <div>
        <h1>Welcome to Shopsy</h1>
        <p style={{marginBottom: '20px'}}>...shop at affordable price!</p>
        <p style={{fontSize: '50px'}}>
           <AppButton  text={'Shop Now!'} useBorder={'none'} bgColor={'orange'} textColor={'white'} />
        </p>
      </div>
      <div>
        <img style={{width: '500px'}} src={assets} alt="" />
      </div>
    </div>
  )
}

const style = {
  hero:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    // border: '2px solid black'
  }
}

export default Hero