import { string, func } from 'prop-types';
import React from 'react';
import { Wrapper, Quote, Speaker } from './styles';
import { Button } from '../../Components'

const Quotes = (props) => {

    const { quote, speaker, onUpdate } = props;

    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}

export default Quotes;