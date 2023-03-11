import { Cycle } from "../../Contexts/ContextCyclesProvider"
import { EnumCycleStateAction } from "../../enum/EnumCycleStateAction"

interface CycleState{
    cycles: Cycle[],
    activeCycle: Cycle | undefined,
}

interface PropsActionCyclesReducer{
    stateAction: EnumCycleStateAction,
    stateInfo?: any
}

export default function CyclesReducer(state: CycleState, action: PropsActionCyclesReducer){
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
                activeCycle: undefined
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
                activeCycle: undefined
            }
        default: return state
    }
}