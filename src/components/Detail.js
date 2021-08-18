import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Conatainer>
            <Background>
                <img src="https://wallpapercave.com/wp/wp5788837.jpg" alt="img" />
            </Background>
            <ImageTitle>
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_08/1541784/onward-poster-today-200222-inline-01.jpg" alt="img"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
            orem ipsum dolor sit amet, consectetu

            </Subtitle>
            <Descriptionm>
            orem ipsum dolor sit amet, consectetuget dolor. Aenean 
            massa. Cum sociis natoque penatibus et magnis dis
             parturient montes, nascetur ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, 
              fringilla vel, aliquet nec, vulputate eget, arcu. 
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
              justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean im

            </Descriptionm>
        </Conatainer>
    )
}

export default Detail

const Conatainer = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x : hidden;
    
`

const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    opacity: 0.8;    
    overflow-x : hidden;
`

const ImageTitle = styled.div`
    height:30vh;
    width:30vh;
    margin-top:20px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%)0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    img{
        width:100%;
        height:100%;
        object-fix:contain;
    }
`

const Controls = styled.div`
    display: flex;
    margin:28px 0px 20px 0px;
    align-items: center;
    

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
   
    background: rgba(0,0,0,0.3);
    border: 1px soild;    
    color:white;
    &:hover {
        background: rgb(198,198,198);
    }
`
const AddButton = styled.button`
    width:44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50px;
    boarder: 2px solid white;
    background: rgba(0,0,0,0.6);  
    cursor: pointer;  
    margin-right: 22px;
    span{
        font-size: 30px;
        color: white;

    }
`
const GroupWatchButton = styled.button`
width:44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50px;
    boarder: 2px solid white;
    background: rgba(0,0,0,0.9);  
    cursor: pointer;  
`

const Subtitle = styled.div``

const Descriptionm = styled.div`
    line=height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249)
`