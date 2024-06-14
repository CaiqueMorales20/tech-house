import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleLG: css`
      font-size: 40px;
      line-height: 160%;
    `,
    titleLogo: css`
      font-size: 20px;
      font-weight: 400;
      color: ${(props) => props.theme.white};
    `,
    calloutRegular: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      color: ${(props) => props.theme['gray-400']};
    `,
  },
}
