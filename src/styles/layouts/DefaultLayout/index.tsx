import { Outlet } from 'react-router-dom'
import { StyledLayoutContainer } from './styles';
import Header from '../../../components/Header/index';
export default function DefaultLayout() {
    return (
        <StyledLayoutContainer>
            <Header/>
            <Outlet/>
        </StyledLayoutContainer>
    )
}