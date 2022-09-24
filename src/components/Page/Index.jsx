import react, {useEffect, onScroll, useState} from 'react'
import { datas } from '../../database/datas'
import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelSection } from '../Model/export'
import { ModelWrapper } from '../Model/export'
import { Container} from './style'
import {useTransform, motion} from 'framer-motion'

function Index(){
    
    window.addEventListener('scroll', event => console.log(event))


    return (
        <Container>
            <div className="barWrapper">
                <div className="bar" ></div>
            </div>

            <ModelWrapper>
                {datas.map(modelName => {
                    return (
                        <ModelSection
                            key={modelName}
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                label={modelName}
                                description='Ordem Online for Delivery'
                            />
                        }/> 
                    )     

                })}
                
            </ModelWrapper>
        </Container>


    )
}

export default Index