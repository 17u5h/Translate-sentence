import React from 'react'
import HumanFigure from '../atoms/SVG/HumanFigure'
import SpeakingCloud from '../atoms/SVG/SpeakingCloud'
import * as S from '../../../styles/mainPageStyles'
import NeedToTranslateText from '../molecules/NeedToTranslateText'

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
