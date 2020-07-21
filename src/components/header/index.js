import React from 'react';
import { HeaderComponent, Logo } from './styled';
import MobiautoLogo from '../../images/logo.png';

function Header(props){
    return(
        <HeaderComponent>
            <Logo src={MobiautoLogo}/>
        </HeaderComponent>
    )
}

export default Header;