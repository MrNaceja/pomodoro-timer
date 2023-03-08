import { HandPalm, Play } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputMinutes, InputTask, StyledHomeContainer, StyledStartButton, StyledInterruptButton } from './styles';
import { differenceInSeconds } from 'date-fns'

export default function Home() {

    type FieldsForm = {
        task: string,
        minutes: string
    }

    interface Cycle{
        id:string,
        task: string,
        minutes: string,
        start: Date,
        interrupted?: Date,
        completed?: Date
    }

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycle, setActiveCycle] = useState<Cycle | null>(null)
    const [secondsCount, setSecondsCount] = useState<number>(0)

    const {register, handleSubmit, watch, reset} = useForm<FieldsForm>({
        defaultValues:{
            task: '',
            minutes:''
        }
    });

    const minutesTotal = activeCycle ? parseInt(activeCycle.minutes) : 0
    const secondsTotal = activeCycle ? (minutesTotal * 60) : 0
    
    useEffect(() => {
        let intervalTimer: number
        if (activeCycle) {
            intervalTimer = setInterval(()=> {
                const secondsPassed = differenceInSeconds(new Date, activeCycle.start)
                if (secondsPassed == secondsTotal) {
                    handleCompleteCycle()
                    clearInterval(intervalTimer)
                }
                setSecondsCount(secondsPassed)
            }, 1000)
        }
        return () => {
            clearInterval(intervalTimer)
        }
    }, [activeCycle])
    
    const secondsLeft  = activeCycle ? (secondsTotal - secondsCount) % 60 : 0
    const minutesLeft  = activeCycle ? Math.floor(secondsLeft / 60) : 0
    
    const minutesFormatted = String(minutesLeft).padStart(2, '0')
    const secondsFormatted = String(secondsLeft).padStart(2, '0')
    
    const task = watch('task')
    
    
    useEffect(() => {
        if (activeCycle) {
            document.title = `${activeCycle.task} - ${minutesFormatted}:${secondsFormatted}`
        } else {
            document.title = 'Pomodoro Timer'
        }
    }, [secondsCount, activeCycle])

    const isStartDisabled = !task;

    function handleStartCycle(fieldsData: FieldsForm) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            start: new Date(),
            ...fieldsData
        }
        setCycles([...cycles, newCycle])
        setActiveCycle(newCycle)
        setSecondsCount(0)
        reset()
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
    }

    return (
        <StyledHomeContainer onSubmit={handleSubmit(handleStartCycle)}>
            <header>
                <label htmlFor="task">Estou trabalhando em</label>
                <InputTask 
                    type="text" 
                    id="task" 
                    list="task-suggestions"
                    placeholder="uma tarefa importante"
                    {...register('task')}
                />

                <datalist id="task-suggestions">
                    <option value="teste"/>
                    <option value="dsad"/>
                    <option value="tecxzcste"/>
                    <option value="tesdsadewte"/>
                </datalist>

                <label htmlFor="minutes">durante</label>
                <InputMinutes 
                    type="number" 
                    id="minutes" 
                    placeholder="00"
                    max={60}
                    min={1}
                    step={5}
                    {...register('minutes')}
                />
                <span>minutos.</span>
            </header>
            <main>
                <span>{minutesFormatted[0]}</span>
                <span>{minutesFormatted[1]}</span>
                <span id="separator">:</span>
                <span>{secondsFormatted[0]}</span>
                <span>{secondsFormatted[1]}</span>
            </main>
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