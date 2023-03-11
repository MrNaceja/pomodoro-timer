import { createContext, ReactNode, useReducer, useState, useEffect } from 'react';
import { ActionsCycle } from '../reducers/Cycles/action';
import CyclesReducer, { CycleState } from '../reducers/Cycles/reducer';

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
    activeCycle: Cycle | null,
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

export default function ContextCyclesProvider({ children } : { children: ReactNode}) {
    const [secondsCount, setSecondsCount] = useState<number>(0)
    let initialStateCycles : CycleState = {
        cycles: [],
        activeCycle: null
    }
    const [cycleState, dispatchCycleState] = useReducer(CyclesReducer, initialStateCycles , () => {//esta função do reducer utiliza o retono como valor inicial do estado caso haja.
        const storagedCyclesState = localStorage.getItem('@pomodoro-timer:cycles-state:v1.0')
        if (storagedCyclesState) {
            initialStateCycles = JSON.parse(storagedCyclesState)
        }
        return initialStateCycles
    })

    const {cycles, activeCycle} = cycleState

    useEffect(() => {
        localStorage.setItem('@pomodoro-timer:cycles-state:v1.0', JSON.stringify(cycleState))
    }, [cycleState])


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