import { createContext, ReactNode, useReducer, useState } from 'react';
import { EnumCycleStateAction } from '../enum/EnumCycleStateAction';
import { ActionsCycle } from '../reducers/Cycles/action';
import CyclesReducer from '../reducers/Cycles/reducer';

export interface Cycle{
    id:string,
    task: string,
    minutes: string,
    start: Date,
    interrupted?: Date,
    completed?: Date
}

interface ContextCyclesValues{
    cycles: Cycle[]
    activeCycle: Cycle | undefined,
    secondsPassed: number,
    completeCycle: () => void,
    interruptCycle: () => void,
    startCycle: (newCycleData : PropsNewCycleData) => void,
    setSecondsPassed: (seconds : number) => void

}

export interface PropsNewCycleData{
    task: string,
    minutes: string
}

export const ContextCycles = createContext({} as ContextCyclesValues)

interface PropsContextCyclesProvider{
    children: ReactNode
}

export default function ContextCyclesProvider({ children } : PropsContextCyclesProvider) {
    const [secondsCount, setSecondsCount] = useState<number>(0)
    const [cycleState, dispatchCycleState] = useReducer(CyclesReducer, {
        cycles: [],
        activeCycle: undefined
    })

    const {cycles, activeCycle} = cycleState


    function startCycle(newCycleData : PropsNewCycleData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            start: new Date(),
            ...newCycleData
        }
        dispatchCycleState(ActionsCycle.actionStartCycle(newCycle))
    }

    function completeCycle() {
        dispatchCycleState(ActionsCycle.actionCompleteCycle())
    }

    function interruptCycle() {
        dispatchCycleState(ActionsCycle.actionInterruptCycle())
        setSecondsCount(0)
    }

    return (
        <ContextCycles.Provider value={{
            cycles: cycles,
            activeCycle: activeCycle,
            completeCycle: completeCycle,
            interruptCycle:interruptCycle,
            secondsPassed: secondsCount,
            setSecondsPassed: setSecondsCount,
            startCycle: startCycle,
        }}>
        { children }
        </ContextCycles.Provider>
    )
}