import { HandPalm, Play } from "phosphor-react";
import { createContext, useState } from "react";
import {StyledHomeContainer, StyledStartButton, StyledInterruptButton } from './styles';
import CycleForm from "./components/CycleForm";
import Countdown from "./components/Countdown";
import { FieldsCycleForm } from './components/CycleForm/index';
import { FormProvider, useForm } from "react-hook-form";

interface Cycle{
    id:string,
    task: string,
    minutes: string,
    start: Date,
    interrupted?: Date,
    completed?: Date
}

interface ContextCyclesValues{
    activeCycle: Cycle | undefined,
    completeCycle: () => void,
}

export const ContextCycles = createContext({} as ContextCyclesValues)

export default function Home() {
    const cycleForm = useForm<FieldsCycleForm>({
        defaultValues:{
            task: '',
            minutes:''
        }
    });


    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycle, setActiveCycle] = useState<Cycle | undefinded>(undefined)

    function handleStartCycle(fieldsCycleFormData : FieldsCycleForm) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            start: new Date(),
            ...fieldsCycleFormData
        }
        setCycles([...cycles, newCycle])
        setActiveCycle(newCycle)
        cycleForm.reset()
    }

    function handleCompleteCycle() {
        setCycles(currentCycles => currentCycles.map(cycle => {
            const idCycleActive = activeCycle ? activeCycle.id : null
            if (cycle.id == idCycleActive) {
                cycle.completed = new Date()
            }
            return cycle
        }))
        setActiveCycle(null)
    }

    function handleInterrupCycle() {
        setCycles(currentCycles => currentCycles.map(cycle => {
            const idCycleActive = activeCycle ? activeCycle.id : null
            if (cycle.id == idCycleActive) {
                cycle.interrupted = new Date()
            }
            return cycle
        }))
        setActiveCycle(null)
        setSecondsCount(0)
    }

    const isStartDisabled = !cycleForm.watch('task');

    return (
        <StyledHomeContainer onSubmit={cycleForm.handleSubmit(handleStartCycle)}>
            <ContextCycles.Provider value={{
                activeCycle: activeCycle,
                completeCycle: handleCompleteCycle,
            }}>

            <FormProvider {...cycleForm}>
                <CycleForm/>
            </FormProvider>
                <Countdown/>
            </ContextCycles.Provider>
            {
            activeCycle
            ? (
                <StyledInterruptButton type="button" onClick={handleInterrupCycle}>
                    Parar <HandPalm size={32} />
                </StyledInterruptButton>
            )
            : (
                <StyledStartButton type="submit" disabled={isStartDisabled}>
                    Iniciar <Play size={32} />
                </StyledStartButton>
            )
            }
        </StyledHomeContainer>
    )
}