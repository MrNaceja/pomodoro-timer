import { Cycle } from "../../Contexts/ContextCyclesProvider";
import { EnumCycleStateAction } from "../../enum/EnumCycleStateAction";

export const ActionsCycle = {
    actionStartCycle: (newCycle: Cycle) => {
        return {
            stateAction: EnumCycleStateAction.ACTION_START,
            stateInfo: newCycle
        }
    },
    actionInterruptCycle: () => {
        return {
            stateAction: EnumCycleStateAction.ACTION_START,
        }
    },
    actionCompleteCycle: () => {
        return {
            stateAction: EnumCycleStateAction.ACTION_START,
        }
    }
}