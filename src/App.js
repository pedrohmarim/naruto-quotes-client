import React, { useState, useEffect, useRef } from 'react';
import narutoImg from './assets/naruto.png';
import styled from 'styled-components';
import { Quotes } from './Components';
import { getQuote } from './Services';
import jutsoSound from './sounds/jutso.mp3'

const audio = new Audio(jutsoSound)

export function App() {

    const isMounted = useRef(true)

    const [quote, setQuote] = useState({
        quote: 'loading...',
        speaker: 'loading speaker'
    })

    const onUpdate = async () => {
        const quote = await getQuote();

        if (isMounted.current) {
            audio.play();
            setQuote(quote);
        }
    }

    useEffect(() => {

        onUpdate();
        return () => {
            isMounted.current = false;
        }

    }, [])

    return (
        <Container>
            <Quotes {...quote} onUpdate={onUpdate} />
            <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
        </Container>
    )
}

export const Container = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end
`;