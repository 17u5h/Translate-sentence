import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import ConstructorWord from '../ConstructorBlock/ConstructorWord'

const WorksheetBlock = () => {
  const { worksheetArray } = useWorkplaceStore(({ worksheetArray }) => ({ worksheetArray }))

  return (
    <S.WorksheetBlock>
      {worksheetArray.map((el) => (
        <ConstructorWord key={el.id} word={el.word} />
      ))}
    </S.WorksheetBlock>
  )
}

export default WorksheetBlock
