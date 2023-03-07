import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { InputMinutes, InputTask, StyledHomeContainer, StyledStartButton } from "./styles";

export default function Home() {

    type FieldsForm = {
        task: string,
        minutes: string
    }

    const {register, handleSubmit, watch, reset} = useForm<FieldsForm>({
        defaultValues:{
            task: '',
            minutes:''
        }
    });

    const task = watch('task')

    let isStartDisabled = !task;

    function handleStartCycle(fieldsData: FieldsForm) {
        reset()
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
                    min={5}
                    step={5}
                    {...register('minutes')}
                />
                <span>minutos.</span>
            </header>
            <main>
                <span>0</span>
                <span>0</span>
                <span id="separator">:</span>
                <span>0</span>
                <span>0</span>
            </main>
            <StyledStartButton type="submit" disabled={isStartDisabled}>
                Iniciar <Play size={32} />
            </StyledStartButton>
        </StyledHomeContainer>
    )
}