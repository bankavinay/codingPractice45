import styled from 'styled-components/macro'

export const ListItem = styled.li`
    width: 49px;
    list-style-type: none;
`
export const DirectionButton = styled.button`
    text-align: center;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')};
    background-color: #ffffff;
    font-family: 'Roboto';
    font-size: 14px;
    font-wight: 600;
    width: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    cursor: pointer;
`
