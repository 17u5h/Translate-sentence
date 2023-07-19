import React, {useState} from 'react';
import UIButton from "../../UI/UIButton";
import * as S from '../../../styles/confirmStyles'
import ConfirmSign from "./ConfirmSign";

const ConfirmBlock = () => {
	const [isConfirmSignVisible, setIsConfirmSignVisible] = useState(false)

	const confirmHandler = () => {
		setIsConfirmSignVisible(prevState => !prevState)
	}

	return (
		<S.ConfirmBlock>
			{isConfirmSignVisible && <ConfirmSign/>}
			<UIButton onClick={confirmHandler} isConfirmSignVisible={isConfirmSignVisible}>Check</UIButton>
		</S.ConfirmBlock>
	);
};

export default ConfirmBlock;