import styled from "styled-components";

export const StyledCountdown = styled.main`
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
`