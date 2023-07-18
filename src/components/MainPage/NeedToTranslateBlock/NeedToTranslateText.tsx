import React from 'react';
import * as S from '../../../styles/mainPageStyles'
import {usePhrasesStore} from "../../../store/phrasesStore";
import NeedToTranslateWord from "./NeedToTranslateWord";


const NeedToTranslateText = () => {

	const {englishPhraseArray} = usePhrasesStore(({englishPhraseArray}) => ({englishPhraseArray}))

	return (
		<S.NeedToTranslateText>
			{englishPhraseArray.map(el => (<NeedToTranslateWord key={el.id} word={el.word}/>))}
		</S.NeedToTranslateText>
	);
};

export default NeedToTranslateText;