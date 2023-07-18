import React from 'react';
import * as S from '../../../styles/mainPageStyles'

type Props = {
	word: string
}

const NeedToTranslateWord = ({word}: Props) => {
	return (
		<S.NeedToTranslateWord>
			{word}
		</S.NeedToTranslateWord>
	);
};

export default NeedToTranslateWord;