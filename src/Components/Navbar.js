import React from 'react'

import styled from 'styled-components'

const NavWrapper =styled.div`

position: fixed;
top: 0;
left: 20rem;
height: 6rem;
width: 100%;

`;

const atext = styled.a`

`;

function Navbar(){
    return(
        <NavWrapper><a href="">Hello</a></NavWrapper>
    );
}

export default Navbar;