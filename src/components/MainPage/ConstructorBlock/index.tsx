import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import ConstructorWord from './ConstructorWord'

const ConstructorBlock = () => {
  const { constructorArray } = useWorkplaceStore(({ constructorArray }) => ({ constructorArray }))

  return (
    <S.ConstructorBlock>
      {constructorArray.map((el) => (
        <ConstructorWord key={el.id} word={el.word} />
      ))}
    </S.ConstructorBlock>
  )
}

export default ConstructorBlock
