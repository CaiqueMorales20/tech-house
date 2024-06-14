import styled from 'styled-components'
import { mixins } from '../../../../../styles/mixins'

export const Item = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px;
  margin-bottom: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  ${mixins.fonts.calloutRegular}
  transition: .3s;

  &:hover {
    color: ${(props) => props.theme.white};
  }
`
