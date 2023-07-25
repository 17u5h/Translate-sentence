import React, {useEffect, useState} from 'react';
import * as S from '../../../styles/mainPageStyles'
import {emptySlotPositionStyle} from "../../../lib/emptySlotPositionStyle";
import {BackgroundSlotPosition} from "../../../types/BackgroundSlotPosition";

type Props = {
	index: number
}

const BackgroundSlot = ({index}: Props) => {
	const initialPosition = { top: '-20000px', left: '-20000px', zIndex: '0'}
	const [positionStyles, setPositionStyles] = useState<BackgroundSlotPosition>(initialPosition)

	useEffect(() => {
		const position = emptySlotPositionStyle(index)
		const positionWithZIndex = {...position, zIndex: '0'}
		setPositionStyles(positionWithZIndex)
	},[])

	return (
		<S.EmptySlot $isWorksheet={false} style={positionStyles} />
	);
};

export default BackgroundSlot;