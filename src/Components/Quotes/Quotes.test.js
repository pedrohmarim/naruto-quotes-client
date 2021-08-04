import { render, screen, fireEvent } from '@testing-library/react';
import Quotes from '../Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () => {

    render(<Quotes quote={quote} speaker={speaker} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(`- ${speaker}`);
    const button = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument
    expect(speakerEl).toBeInTheDocument
    expect(button).toBeInTheDocument

})

test.only('calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(callback).toHaveBeenCalledTimes(1);
});