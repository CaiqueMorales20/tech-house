import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Nav = styled.nav`
  background-color: ${(props) => props.theme['gray-900']};
  width: 268px;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 53px;
`
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.031rem;
`
export const LogoTitle = styled.p`
  ${mixins.fonts.titleLogo}
`
