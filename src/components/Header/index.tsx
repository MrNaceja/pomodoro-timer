import { Timer, Scroll, Atom } from "phosphor-react";
import { StyledHeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <StyledHeaderContainer>
            <span>Pomodoro Timer <Atom size={32}/></span>
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </StyledHeaderContainer>
    )
}