import React from 'react'
import styled from 'styled-components';

const CharDiv = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
    `;
const CharImg = styled.img`
    width: 500px;
    height: 500px;
`   


export default function Info(props) {
    const { charName, image } = props
return (
    <CharDiv className='charDiv'>
            <CharImg src= {image} />
            <p>  Who's that pokemon? </p>
            <p> It's {charName} </p>
    </CharDiv>
)
}