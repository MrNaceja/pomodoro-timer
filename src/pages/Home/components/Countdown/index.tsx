import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { ContextCycles } from '../../../../Contexts/ContextCyclesProvider'

export default function Countdown() {
    const { activeCycle, completeCycle, setSecondsPassed, secondsPassed } = useContext(ContextCycles)

    const minutesTotal = activeCycle ? parseInt(activeCycle.minutes) : 0
    const secondsTotal = activeCycle ? (minutesTotal * 60) : 0
    
    useEffect(() => {
        let intervalTimer: number
        if (activeCycle) {
            intervalTimer = setInterval(()=> {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.start))
                if (secondsDifference == secondsTotal) {
                    completeCycle()
                    clearInterval(intervalTimer)
                }
                setSecondsPassed(secondsDifference)
            }, 1000)
        }
        return () => {
            clearInterval(intervalTimer)
        }
    }, [activeCycle, completeCycle])
    
    const secondsLeft = activeCycle ? (secondsTotal - secondsPassed) : 0
    const minutesLeft = activeCycle ? Math.floor(secondsLeft / 60)  : 0

    const minutesFormatted = String(minutesLeft     ).padStart(2, '0')
    const secondsFormatted = String(secondsLeft % 60).padStart(2, '0')
    
    useEffect(() => {
        if (activeCycle) {
            document.title = `${activeCycle.task} - ${minutesFormatted}:${secondsFormatted}`
        } else {
            document.title = 'Pomodoro Timer'
        }
    }, [secondsPassed, activeCycle])

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