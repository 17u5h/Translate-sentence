import { styled } from 'styled-components'
import { vars } from './_vars'

type Props = {
  $isWorksheet: boolean
}

export const Wrapper = styled.div`
  width: 800px;
  margin: auto;
`
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
export const Title = styled.h1`
  width: 80%;
  text-shadow: 0 2px 2px ${vars.$colorThemeShadows};
`
export const NeedToTranslateBlock = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`
export const SpeakingCloudContainer = styled.div`
  position: relative;
`
export const NeedToTranslateText = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  font-weight: 600;
  line-height: 30px;
  left: 18%;
  top: 2%;
  width: 80%;
`
export const NeedToTranslateWord = styled.p`
  border-bottom: 2px dashed ${vars.$colorThemeShadows};
`
export const WorksheetBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 10px;
  width: 100%;
  height: 180px;
  border: 4px dashed ${vars.$colorThemeShadows};
  border-radius: 12px;
  padding: 8px 16px;
  font-weight: 600;
  &:hover {
    background-color: #f0f0f0;
  }
`

export const CentralSign = styled. h2`
  position: absolute;
  color: #d1d1d1;
  font-size: 32px;
  top: 40%;
  left: 20%;
`

export const ConstructorBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 6px;
  row-gap: 10px;
  height: 180px;
  width: 100%;
  padding: 8px 16px;
  background-color: #efefef;
  border-radius: 12px;
`
export const ConstructorWord = styled.div<Props>`
  position: ${(props) => (props.$isWorksheet ? 'static' : 'absolute')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  width: 180px;
  height: 32px;
  line-height: 20px;
  padding: 4px 18px;
  border: 2px solid ${vars.$colorThemeShadows};
  border-radius: 16px;
  box-shadow: 0 4px 4px ${vars.$colorThemeShadows};
  font-weight: 600;
  cursor: grab;
  user-select: none;
  z-index: 2;
  &:hover {
    background-color: #fff;
  }
`
export const EmptySlot = styled(ConstructorWord)`
  background-color: ${vars.$colorThemeShadows};
  box-shadow: inset 0 4px 4px ${vars.$colorThemeMain};
  color: ${vars.$colorThemeShadows};
  z-index: 1;
  cursor: default;
  &:hover {
    background-color: ${vars.$colorThemeShadows};
  }
`
