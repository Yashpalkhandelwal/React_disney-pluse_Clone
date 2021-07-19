import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommded For You</h4>
            <Content>
                <Wrap>
                    <img src= "https://cdn.mos.cms.futurecdn.net/jPSMVH6xr3YwTq5s9dWKmM.jpg"/>
                </Wrap>
                <Wrap>
                    <img src= "https://cdn.mos.cms.futurecdn.net/jPSMVH6xr3YwTq5s9dWKmM.jpg"/>
                </Wrap>
                <Wrap>
                    <img src= "https://cdn.mos.cms.futurecdn.net/jPSMVH6xr3YwTq5s9dWKmM.jpg"/>
                </Wrap>
                <Wrap>
                    <img src= "https://cdn.mos.cms.futurecdn.net/jPSMVH6xr3YwTq5s9dWKmM.jpg"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat( 4, minmax(0px, 1fr) );

`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%)0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 150ms cubic-bezier(0.2,2,1,2) 0s;

    img{
        width:100%;
        height:100%;
        object-fix: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%)0px 48px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`