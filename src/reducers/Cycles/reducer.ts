import { Cycle } from "../../Contexts/ContextCyclesProvider"
import { EnumCycleStateAction } from "../../enum/EnumCycleStateAction"

export interface CycleState{
    cycles: Cycle[],
    activeCycle: Cycle | null,
}

interface PropsActionCyclesReducer{
    stateAction: EnumCycleStateAction,
    stateInfo?: any
}

export default function CyclesReducer(state: CycleState, action: PropsActionCyclesReducer) : CycleState{
    switch(action.stateAction) {
        case EnumCycleStateAction.ACTION_START:
            return {
                cycles: [...state.cycles, action.stateInfo],
                activeCycle: action.stateInfo
            }
        case EnumCycleStateAction.ACTION_INTERRUPT:
            return {
                cycles: state.cycles.map(cycle => {
                    const idCycleActive = state.activeCycle ? state.activeCycle.id : null
                    if (cycle.id == idCycleActive) {
                        cycle.interrupted = new Date()
                    }
                    return cycle
                }),
                activeCycle: null
            }
        case EnumCycleStateAction.ACTION_COMPLETE:
            return {
                cycles: state.cycles.map(cycle => {
                    const idCycleActive = state.activeCycle ? state.activeCycle.id : null
                    if (cycle.id == idCycleActive) {
                        cycle.completed = new Date()
                    }
                    return cycle
                }),
                activeCycle: null
            }
        default: return state
    }
}