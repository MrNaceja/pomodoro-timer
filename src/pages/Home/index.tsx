import { HandPalm, Play } from "phosphor-react";
import {StyledHomeContainer, StyledStartButton, StyledInterruptButton } from './styles';
import CycleForm from "./components/CycleForm";
import Countdown from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from 'react';
import { ContextCycles, PropsNewCycleData } from "../../Contexts/ContextCyclesProvider";



export default function Home() {
    const { activeCycle, startCycle, interruptCycle } = useContext(ContextCycles)
    const cycleForm = useForm<PropsNewCycleData>({
        defaultValues:{
            task: '',
            minutes:''
        }
    });
    const isStartDisabled = !cycleForm.watch('task');

    function onSubmitCreateNewCycle(formDate : PropsNewCycleData) {
        startCycle(formDate)
        cycleForm.reset()
    }

    return (
        <StyledHomeContainer onSubmit={cycleForm.handleSubmit(onSubmitCreateNewCycle)}>
            <FormProvider {...cycleForm}>
                <CycleForm/>
            </FormProvider>
                <Countdown/>
            {
            activeCycle
            ? (
                <StyledInterruptButton type="button" onClick={interruptCycle}>
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