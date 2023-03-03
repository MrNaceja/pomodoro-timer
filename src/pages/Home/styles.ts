import styled from 'styled-components';

export const StyledHomeContainer = styled.form`
    flex: 1;
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

export const StyledStartButton = styled.button`
    width: 80%;
    background: ${props => props.theme.green[900]};
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

    &:not(:disabled):hover {
        background: ${props => props.theme.green[500]}
    }

`