import React from 'react'
import * as S from '../../../styles/mainPageStyles'

type Props = {
  word: string
}

const WorksheetWord = ({ word }: Props) => {
  console.log(word)
  return <S.WorksheetWord>{word}</S.WorksheetWord>
}

export default WorksheetWord
