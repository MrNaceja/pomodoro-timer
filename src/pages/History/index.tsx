import { StyledHistoryContainer, StyledHistoryList, StyledStatusIndicator } from './styles';

export default function History() {
    return (
        <StyledHistoryContainer>
            <h1>Meu Histórico</h1>
            <StyledHistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudar react</td>
                            <td>60 minutos</td>
                            <td>Há 2 horas</td>
                            <td>
                                <StyledStatusIndicator status='progress'>
                                    Em andamento
                                </StyledStatusIndicator>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar react</td>
                            <td>60 minutos</td>
                            <td>Há 2 horas</td>
                            <td>
                                <StyledStatusIndicator status='progress'>
                                    Em andamento
                                </StyledStatusIndicator>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar react</td>
                            <td>60 minutos</td>
                            <td>Há 2 horas</td>
                            <td>
                                <StyledStatusIndicator status='progress'>
                                    Em andamento
                                </StyledStatusIndicator>
                            </td>
                        </tr>
                        <tr>
                            <td>Estudar react</td>
                            <td>60 minutos</td>
                            <td>Há 2 horas</td>
                            <td>
                            <StyledStatusIndicator status='progress'>
                                Em andamento
                            </StyledStatusIndicator>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </StyledHistoryList>
        </StyledHistoryContainer>
    )
}