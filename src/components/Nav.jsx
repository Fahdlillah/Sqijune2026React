import React from 'react'
import {Link} from 'react-router-dom'

import '../App.css'
import AppButton from './AppButton';

const Nav = () => {
  return (
    <nav style={style.navs}>
        <div>
            <h1><a href="">ShopsSy</a></h1>
        </div>
        <div style={style.menulist}>
            <li style={{color:"green"}}>Products</li>
            <Link to={'/create-product'}>
                <li style={{color:'green'}}>Create</li>
            </Link>
            <li style={{color:"green"}}>Blog</li>
            <li style={{color:"green"}}>Contact</li>
        </div>
        <div style={{display:'flex', gap:"1em",}}>
          <AppButton text={'login'} bgColor={'white'} textColor={'blue'}/>
           <AppButton text={'Signup'} bgColor={'orange'} useBorder={'none'} textColor={'white'}/>
        </div>
    </nav>
  )
}

const style = {
    navs:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'aliceblue'
    },
    menulist:{
        display: 'flex',
        gap: '2em'
    },
    buttons:{
        padding: '10px 20px',
        backgroundColor: 'blue',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
    }
}

export default Nav
