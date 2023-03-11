import { StyledHistoryContainer, StyledHistoryList, StyledStatusIndicator } from './styles';
import { ContextCycles } from '../../Contexts/ContextCyclesProvider';
import { useContext } from 'react';

import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function History() {

    const { cycles } = useContext(ContextCycles)

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
                    {
                    cycles.map(cycle => {
                        return (
                            <tr key={cycle.id}>
                                <td>{cycle.task}</td>
                                <td>{cycle.minutes} minutos</td>
                                <td>{formatDistanceToNow(cycle.start, {addSuffix: true, locale: ptBR})}</td>
                                <td>
                                {
                                    cycle.completed && (
                                        <StyledStatusIndicator status='completed'>Completo</StyledStatusIndicator>
                                    )
                                }
                                {
                                    cycle.interrupted && (
                                        <StyledStatusIndicator status='interrupted'>Interrompido</StyledStatusIndicator>
                                    )
                                }
                                {
                                    (!cycle.interrupted && !cycle.completed) && (
                                        <StyledStatusIndicator status='progress'>Em Progresso</StyledStatusIndicator>
                                    )
                                }
                                </td>
                            </tr>
                        ) 
                    })
                    }
                    </tbody>
                </table>
            </StyledHistoryList>
        </StyledHistoryContainer>
    )
}