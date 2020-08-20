import React from 'react'
import styled from 'styled-components';

const CharDiv = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    `;
const CharImg = styled.img`
    width: 200px;
    height: 200px;
`   
const SingleDiv = styled.div`
    
`


export default function CharList(props) {
    const { charNames, search } = props
    const array = Array.from( charNames )
return (
    <CharDiv>
    <form>
        <input
        type="text"
        placeholder="Search"
        onChange= {search}
        />
    </form>
        {array.map((char) => {
                return <SingleDiv>
                    <CharImg src={`https://img.pokemondb.net/artwork/large/${char.name}.jpg`} />
                    <p> {char.name} </p>
                    </SingleDiv>
            })}
    </CharDiv>
)
}