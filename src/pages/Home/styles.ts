import styled from 'styled-components';

export const StyledHomeContainer = styled.form`
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:2.5rem;
    font-size: 1.125rem;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        flex-wrap: wrap;
        font-weight: bold;
    }
`

const StyledTimerButton = styled.button`
    width: 100%;
    padding:1rem;
    color: ${props => props.theme.gray[100]};
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius:8px;
    gap:0.5rem;
    font-weight:bold;
    border:none;
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor:pointer;
    transition: .2s;

    &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }

`

export const StyledStartButton = styled(StyledTimerButton)`
    background: ${props => props.theme.green[900]};
    &:not(:disabled):hover {
        background: ${props => props.theme.green[500]}
    }
`
export const StyledInterruptButton = styled(StyledTimerButton)`
    background: ${props => props.theme.red[900]};
    &:not(:disabled):hover {
        background: ${props => props.theme.red[500]}
    }
`