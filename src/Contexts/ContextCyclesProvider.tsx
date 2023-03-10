import { createContext, ReactNode, useState } from 'react';

interface Cycle{
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
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycle, setActiveCycle] = useState<Cycle | undefined>(undefined)
    const [secondsCount, setSecondsCount] = useState<number>(0)

    function startCycle(newCycleData : PropsNewCycleData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            start: new Date(),
            ...newCycleData
        }
        setCycles([...cycles, newCycle])
        setActiveCycle(newCycle)
    }

    function completeCycle() {
        setCycles(currentCycles => currentCycles.map(cycle => {
            const idCycleActive = activeCycle ? activeCycle.id : null
            if (cycle.id == idCycleActive) {
                cycle.completed = new Date()
            }
            return cycle
        }))
        setActiveCycle(undefined)
    }

    function interruptCycle() {
        setCycles(currentCycles => currentCycles.map(cycle => {
            const idCycleActive = activeCycle ? activeCycle.id : null
            if (cycle.id == idCycleActive) {
                cycle.interrupted = new Date()
            }
            return cycle
        }))
        setActiveCycle(undefined)
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