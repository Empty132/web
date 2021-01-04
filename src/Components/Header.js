import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`

display: flex;
position: fixed;
top: 0;
left: 5rem;
width: 15rem;
height: 6rem;
background-color: red;


`;

const Text = styled.h1`
color: white;
padding: 0.5rem 2rem;

`;



function Header () {
    return(

    <Wrapper><Text>Hello world</Text></Wrapper>
    );
};

export default Header;