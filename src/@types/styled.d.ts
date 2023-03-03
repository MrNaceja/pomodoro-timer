import { DefaultTheme } from 'styled-components'
import { DEFAULT_THEME } from '../styles/themes/Default'

type ThemeType = typeof DEFAULT_THEME

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}