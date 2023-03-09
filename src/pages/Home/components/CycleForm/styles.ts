import styled from "styled-components";

const InputBase = styled.input`
    background: transparent;
    font-size: 1.125rem;
    border:0;
    border-top:2px solid transparent;
    border-bottom:2px solid ${props => props.theme.gray[300]};
    color: ${props => props.theme.gray[100]};

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    &:focus {
        box-shadow: none;
        border-bottom: 2px solid ${props => props.theme.green[500]}
    }
`
export const InputTask = styled(InputBase)`
    flex:1;
`
export const InputMinutes = styled(InputBase)`
    width:4rem;
`