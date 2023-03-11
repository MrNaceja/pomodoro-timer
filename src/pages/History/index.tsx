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
                {
                    cycles.length > 0  ? (
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
                                <td>{cycle.minutes} minuto(s)</td>
                                <td>{formatDistanceToNow(new Date(cycle.start), {addSuffix: true, locale: ptBR})}</td>
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
                    ) : <h1 id="no-cycles">Não há ciclos criados ou em andamento :(</h1>
                }
            </StyledHistoryList>
        </StyledHistoryContainer>
    )
}