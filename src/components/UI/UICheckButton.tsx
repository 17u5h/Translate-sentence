import React from 'react'
import * as S from '../../styles/UIStyles'

type Props = {
  onClick: () => void
  children: string
  isConfirmSignVisible?: boolean
}

const UICheckButton = ({ onClick, children, isConfirmSignVisible }: Props) => {
  return (
    <S.UIButton onClick={onClick} $isConfirmSignVisible={isConfirmSignVisible}>
      {children}
    </S.UIButton>
  )
}

export default UICheckButton
