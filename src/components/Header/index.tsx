import { Timer, Scroll } from "phosphor-react";
import { StyledHeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <StyledHeaderContainer>
            <span>logo</span>
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