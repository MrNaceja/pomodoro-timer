import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { ContextCycles } from './../../index';

export default function Countdown() {
    const { activeCycle, completeCycle } = useContext(ContextCycles)

    const [secondsCount, setSecondsCount] = useState<number>(0)

    const minutesTotal = activeCycle ? parseInt(activeCycle.minutes) : 0
    const secondsTotal = activeCycle ? (minutesTotal * 60) : 0
    
    useEffect(() => {
        let intervalTimer: number
        if (activeCycle) {
            intervalTimer = setInterval(()=> {
                const secondsPassed = differenceInSeconds(new Date, activeCycle.start)
                if (secondsPassed == secondsTotal) {
                    completeCycle()
                    clearInterval(intervalTimer)
                }
                setSecondsCount(secondsPassed)
            }, 1000)
        }
        return () => {
            clearInterval(intervalTimer)
        }
    }, [activeCycle, completeCycle])
    
    const secondsLeft = activeCycle ? (secondsTotal - secondsCount) : 0
    const minutesLeft = activeCycle ? Math.floor(secondsLeft / 60)  : 0

    const minutesFormatted = String(minutesLeft     ).padStart(2, '0')
    const secondsFormatted = String(secondsLeft % 60).padStart(2, '0')
    
    useEffect(() => {
        if (activeCycle) {
            document.title = `${activeCycle.task} - ${minutesFormatted}:${secondsFormatted}`
        } else {
            document.title = 'Pomodoro Timer'
        }
    }, [secondsCount, activeCycle])

    return (
        <main>
            <span>{minutesFormatted[0]}</span>
            <span>{minutesFormatted[1]}</span>
            <span id="separator">:</span>
            <span>{secondsFormatted[0]}</span>
            <span>{secondsFormatted[1]}</span>
        </main>
    )
}