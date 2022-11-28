import styled from "styled-components"
import { useRef } from "react";
import useIntersection from "./useIntersection";

const infos = [
    {name: 'Model 3', scr: 'Desktop-Model3.jpeg', description: 'Order Online for Touchless Delivery', buttonOne: 'Custom Ordem', buttonTwo: 'Existing Inventory'},
    {name: 'Model Y', scr: 'Desktop-ModelY.jpeg' , description: 'Order Online for Touchless Delivery', buttonOne: 'Custom Ordem', buttonTwo: 'Existing Inventory'},
    {name: 'Model S', scr: 'Desktop-ModelS.jpeg' , description: 'Order Online for Touchless Delivery', buttonOne: 'Custom Ordem', buttonTwo: 'Existing Inventory'},
    {name: 'Model X', scr: 'Desktop-ModelX.jpeg' , description: 'Order Online for Touchless Delivery', buttonOne: 'Custom Ordem', buttonTwo: 'Existing Inventory'},
    {name: 'Solar Panels', scr: 'Desktop-SolarPanels.jpeg' , description: 'Lowest Cost Solar Panels in America', buttonOne: 'Ordem Now', buttonTwo: 'Learn More'},
    {name: 'Solar Roof', scr: 'Desktop-SolarRoof.jpeg' , description: 'Produce Clean Energy From Your Roof' , buttonOne: 'Ordem Now', buttonTwo: 'Learn More'},
    {name: 'Accessories', scr: 'Desktop-Accessories.jpg' , description: '',buttonOne: 'Shop Now', buttonTwo: false}
]

export function Sections(){
        return <Container>
            {infos.map(model =>{
                if(model.name === 'Accessories'){

                    const ref = useRef();
                    const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visi

                    if (inViewport) {
                        console.log('in viewport:', ref.current);
                    }

                    return (
                        <Section key={model.name} 
                        src={`./src/assets/${model.scr}`} className='Accessories'>
                            <Heading>
                                <h1>{model.name}</h1>
                                <h2>{model.description}</h2>
                            </Heading>

                            <Buttons>
                                <button className="shopNowButton">{model.buttonOne}</button>
                            </Buttons>
                        </Section>
                    )
                }else{
                    return (
                        <Section key={model.name} 
                        src={`./src/assets/${model.scr}`}>
                            <Heading>
                                <h1>{model.name}</h1>
                                <h2>{model.description}</h2>
                            </Heading>

                            <Buttons>
                                <button>{model.buttonOne}</button>
                                <button className="buttonWhite">{model.buttonTwo}</button>
                            </Buttons>
                        </Section>
                    )
                }

            })}

        </Container>
}

const Container = styled.main`
`

const Section = styled.section`
    background-image: url(${(props) => props.src });
    background-size: 150%;
    background-position: center;

    display: flex;
    text-align : center;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: relative;

    /* Start Scrool Snap */
    scroll-snap-align: start;
`

const Heading = styled.section`
    margin-top:16.5vh;
    text-align: center;
    h1{
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #171A20 ;
        transition: all .7s ease;
        letter-spacing: .6px;
    }

    h2, a{
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #5c5e62;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 130px;
    
    button{
        min-width: 210px;
        background-color: #171a20cc;
        color: #ffffff;
        opacity: 0.9;

        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 4px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.buttonWhite{
            background-color: #ffffff;
            color: #171a20cc;
            opacity: 0.65;
        }

        & + button{
            margin: 10px 0 0;
        }

        &.shopNowButton{
            background-color: #000000;
            min-width: 260px;
            min-height: 44px;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 90px;

        button + button{
            margin: 0 0 0 10px;
        }
    }
`