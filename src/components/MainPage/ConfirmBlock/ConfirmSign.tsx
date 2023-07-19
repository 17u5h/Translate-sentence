import React from 'react';
import * as S from '../../../styles/confirmStyles'
import {useConfirmAnswerStore} from "../../../store/confirmAnswerStore";

const ConfirmSign = () => {
	const {isAnswerCorrect} = useConfirmAnswerStore(({isAnswerCorrect}) => ({isAnswerCorrect}))

	return (
		<S.ConfirmSign $isAnswerCorrect={isAnswerCorrect}>
			{isAnswerCorrect ? "You're right!" : 'Something wrong!' }
		</S.ConfirmSign>
	);
};

export default ConfirmSign;