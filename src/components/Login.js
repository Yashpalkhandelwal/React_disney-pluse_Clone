import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>Action</SignUp>         
                <CTALogoTwo src="/images/cta-logo-two.png"/>    

            </CTA>
            
        </Container>
    )
}

export default Login


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x : hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{        
        
        background: url("/images/login-background.jpg") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left : 0;
        right:0;
        bottom:0;
        z-index:-1;
    }
   
`

const CTA = styled.div`
    max-width: 640px;
    padding: 80px 40px;
    width: 75%;
    display: flex;
    flex-direction: column;
    

`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    width:100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 5px;
    text-align: center;

    &:hover {
        background-color: #2179ed;
    }

`

const CTALogoTwo = styled.img`
    padding: 20px;
    width: 100%;
    height: 100%;
`