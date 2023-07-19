import React from 'react'
import * as S from '../../../styles/confirmStyles'

type Props = {
  isAnswerCorrect: boolean
}

const ConfirmSign = ({isAnswerCorrect}: Props) => {

  return (
    <S.ConfirmSign $isAnswerCorrect={isAnswerCorrect}>
      {isAnswerCorrect ? "You're right!" : 'Something wrong!'}
    </S.ConfirmSign>
  )
}

export default ConfirmSign
