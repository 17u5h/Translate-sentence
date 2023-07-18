import {styled} from "styled-components";
import {vars} from "./_vars";

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
	gap: 40px;
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
export const NeedToTranslateText = styled.p`
	position: absolute;
	font-weight: 600;
	line-height: 30px;
	left: 15%;
	top: 30%;
	width: 80%;
	border-bottom: 2px dashed ${vars.$colorThemeShadows};
`