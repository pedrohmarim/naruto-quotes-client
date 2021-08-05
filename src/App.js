import React from 'react';
import narutoImg from './assets/naruto.png';
import styled from 'styled-components';
import { Quotes } from './Components';
import { getQuote } from './Services'

export function App() {

    const onUpdate = async () => {
        const quote = await getQuote();
        console.log(quote);
    }

    return (
        <Container>
            <Quotes quote={'ok'} speaker={'Speaker'} onUpdate={onUpdate} />
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