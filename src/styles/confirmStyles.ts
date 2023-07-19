import { styled } from 'styled-components'
import { vars } from './_vars'

type Props = {
  $isAnswerCorrect?: boolean
}

export const ConfirmBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 12vh;
`
export const ConfirmSign = styled.h2<Props>`
  color: ${(props) => (props.$isAnswerCorrect ? '#64d518' : '#d82424')};
  text-shadow: 0 2px 2px ${vars.$colorThemeShadows};
`
