import React, { useState } from 'react'
import UICheckButton from '../../UI/UICheckButton'
import * as S from '../../../styles/confirmStyles'
import ConfirmSign from './ConfirmSign'

const ConfirmBlock = () => {
  const [isConfirmSignVisible, setIsConfirmSignVisible] = useState(false)

  const confirmHandler = () => {
    setIsConfirmSignVisible((prevState) => !prevState)
  }

  return (
    <S.ConfirmBlock>
      {isConfirmSignVisible && <ConfirmSign />}
      <UICheckButton onClick={confirmHandler} isConfirmSignVisible={isConfirmSignVisible}>
        Check
      </UICheckButton>
    </S.ConfirmBlock>
  )
}

export default ConfirmBlock
