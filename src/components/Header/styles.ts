import styled from 'styled-components';

export  const StyledHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            color:${props => props.theme.gray[300]};
            display: grid;
            place-items: center;
            height: 3rem;
            width: 3rem;

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: .2s;

           &:hover {
                border-bottom: 3px solid ${props => props.theme.green[500]};
           }
            &.active {
                color: ${props => props.theme.green[500]}
            }
        }
    }
`