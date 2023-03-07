import styled from 'styled-components';

export const StyledHistoryContainer = styled.main`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 1.5rem;

    h1 {
        font-size:1.5rem;
    }
`
export const StyledHistoryList = styled.div`
    flex:1;
    overflow: auto;
    margin-top:2rem;

    table {
        border-collapse: collapse;
        width:100%;
        min-width:600px;

        th {
            background: ${props => props.theme.gray[500]};
            padding:1rem;
            line-height:1.6;
            text-align: left;
            &:first-child {
                border-top-left-radius: 8px;
            }
            &:last-child {
                border-top-right-radius: 8px;
            }
            border-bottom: 1px solid ${props => props.theme.gray[400]};
        }

        tr {
            background: ${props => props.theme.gray[700]};
            &:nth-child(even) {
                background: ${props => props.theme.gray[600]};
            }
        }

        td {
            font-size:.85rem;
            padding:1rem;
            line-height: 1.6;
            color: ${props => props.theme.gray[300]};
            &:first-child {
                width:50%;
            }
        }
    }
`

const STATUS_INDICATOR_COLORS = {
    completed:   ['green' , '500'],
    progress:    ['yellow', '500'],
    interrupted: ['red'   , '500']
} as const

interface PropsStatusIndicator{
    status: keyof typeof STATUS_INDICATOR_COLORS
}

export const StyledStatusIndicator = styled.span<PropsStatusIndicator>`
    display: flex;
    align-items: center;
    gap:0.5rem;

    &::before {
        content: '';
        width:0.5rem;
        height:0.5rem;
        border-radius: 50%;
        background: ${props => {
            let [color, tonality] = STATUS_INDICATOR_COLORS[props.status]
            return props.theme[color][tonality]
        }}
    }
`