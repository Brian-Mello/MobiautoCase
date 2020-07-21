import React from 'react';
import { FooterComponent, CopyrightText } from './styled'

export function Footer (props) {
    return (
        <FooterComponent>
            <CopyrightText>Copyright © {new Date().getFullYear()} <b>Brian Mello design Limited.</b></CopyrightText>
        </FooterComponent>
    )
}

export default Footer;