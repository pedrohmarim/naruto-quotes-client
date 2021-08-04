import styled from 'styled-components';

const Button = styled.button`
    background: #dc872c;
    color: #fff;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    transition: all 0.3s;

    &:hover{
        background: #a40000;
    }
`;

export default Button;
