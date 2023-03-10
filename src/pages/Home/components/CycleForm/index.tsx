import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { InputMinutes, InputTask } from "./styles";
import { ContextCycles } from '../../../../Contexts/ContextCyclesProvider';

export default function CycleForm() {
    const { activeCycle } = useContext(ContextCycles)
    const { register } = useFormContext()
    return (
        <header>
            <label htmlFor="task">Estou trabalhando em</label>
            <InputTask 
                disabled={!!activeCycle}
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
                disabled={!!activeCycle}
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
    )
}