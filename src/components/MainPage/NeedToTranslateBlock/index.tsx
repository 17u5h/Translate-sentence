import React from 'react'
import HumanFigure from '../SVG/HumanFigure'
import SpeakingCloud from '../SVG/SpeakingCloud'
import * as S from '../../../styles/mainPageStyles'
import NeedToTranslateText from './NeedToTranslateText'

const NeedToTranslateBlock = () => {
  return (
    <S.NeedToTranslateBlock>
      <HumanFigure />
      <S.SpeakingCloudContainer>
        <SpeakingCloud />
        <NeedToTranslateText />
      </S.SpeakingCloudContainer>
    </S.NeedToTranslateBlock>
  )
}

export default NeedToTranslateBlock
