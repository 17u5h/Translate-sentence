import React from 'react'
import * as S from '../../../styles/mainPageStyles'

type Props = {
  word: string
}

const ConstructorWord = ({ word }: Props) => {
  return <S.ConstructorWord>{word}</S.ConstructorWord>
}

export default ConstructorWord
