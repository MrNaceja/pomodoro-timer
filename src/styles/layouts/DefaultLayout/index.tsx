import { Outlet } from 'react-router-dom'
export default function DefaultLayout() {
    return (
        <div>
            <h1>Padrão</h1>
            <Outlet/>
        </div>
    )
}