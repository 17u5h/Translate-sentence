import React from 'react';
import Title from "../components/MainPage/Title";
import NeedToTranslateBlock from "../components/MainPage/NeedToTranslateBlock";
import * as S from "../styles/mainPageStyles";


const MainPage = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<Title/>
				<NeedToTranslateBlock/>
			</S.Container>
		</S.Wrapper>
	);
};

export default MainPage;