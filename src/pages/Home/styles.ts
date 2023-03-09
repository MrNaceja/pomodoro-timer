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

    main {
        display: flex;
        align-items: center;
        gap:1rem;
        font-size:10rem;
        line-height: 8rem;
        span {
            background: ${props => props.theme.gray[700]};
            padding:2rem 1rem;
            border-radius:8px;
        }
        span#separator {
            background: transparent;
            color: ${props => props.theme.green[500]}
        }
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